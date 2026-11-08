/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef, useDeferredValue, Suspense, lazy } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { ConfettiSparkles } from './components/ConfettiSparkles';
import { Header, AppRoute } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { ShayariCard } from './components/ShayariCard';
import { ZQ_OFFICIAL_DEFAULTS } from './data/categories/zqOfficialDefaults';
import { INITIAL_APNI_SHAYARI_SEEDS } from './data/communitySeeds';
import {
  Shayari,
  GlobalShayariItem,
  UserPost,
  CommentItem,
  FontStyleId,
  LanguageType,
  ReligiousCategory,
  FamilyRitualCategory
} from './types/shayari';
import { subscribeApprovedShayaris, getOrCreateLocalUserId } from './firebase';
import { MonthId } from './zq-mansoon-special/types';
import {
  ValentineCategoryId,
  ValentineLangCode,
  buildValentineCleanPath
} from './data/valentineWeekMeta';
import {
  Holiday35Id,
  STATIC35_CODE_BY_GLOBAL_ID,
  VALID_FEELINGS_MAIN_CAT_IDS,
  VALID_MAAFI_CAT_IDS,
  buildFeelingsCleanPath,
  buildHoliday35CleanPath,
  isHoliday35Category
} from './data/static35/static35Meta';
import type { LegalTabId } from './components/LegalPage';

const FestivalPage = lazy(() =>
  import('./components/FestivalPage').then((m) => ({ default: m.FestivalPage }))
);
const FeelingsPage = lazy(() =>
  import('./components/FeelingsPage').then((m) => ({ default: m.FeelingsPage }))
);
const ValentineWeekPage = lazy(() =>
  import('./components/ValentineWeekPage').then((m) => ({ default: m.ValentineWeekPage }))
);
const ReligiousPage = lazy(() =>
  import('./components/ReligiousPage').then((m) => ({ default: m.ReligiousPage }))
);
const FamilyRitualsPage = lazy(() =>
  import('./components/FamilyRitualsPage').then((m) => ({ default: m.FamilyRitualsPage }))
);
const ZqOfficialPage = lazy(() =>
  import('./components/ZqOfficialPage').then((m) => ({ default: m.ZqOfficialPage }))
);
const PublicWall = lazy(() =>
  import('./components/PublicWall').then((m) => ({ default: m.PublicWall }))
);
const FavoritesPage = lazy(() =>
  import('./components/FavoritesPage').then((m) => ({ default: m.FavoritesPage }))
);
const AdminZqPage = lazy(() =>
  import('./components/AdminZqPage').then((m) => ({ default: m.AdminZqPage }))
);
const ZqMomentsPage = lazy(() =>
  import('./components/ZqMomentsPage').then((m) => ({ default: m.ZqMomentsPage }))
);
const ZqMansoonSpecialPage = lazy(() =>
  import('./zq-mansoon-special/ZqMansoonSpecialPage').then((m) => ({
    default: m.ZqMansoonSpecialPage
  }))
);
const CardDownloadModal = lazy(() =>
  import('./components/CardDownloadModal').then((m) => ({ default: m.CardDownloadModal }))
);
const CommentsModal = lazy(() =>
  import('./components/CommentsModal').then((m) => ({ default: m.CommentsModal }))
);
const AdminPanelModal = lazy(() =>
  import('./components/AdminPanelModal').then((m) => ({ default: m.AdminPanelModal }))
);
const LegalPage = lazy(() =>
  import('./components/LegalPage').then((m) => ({ default: m.LegalPage }))
);
import {
  buildCleanSeoUrl,
  parseLocationToRoute,
  getSeoMetadataForState,
  syncDocumentSeo
} from './utils/seo';
import { useGlobalLanguage } from './context/GlobalLanguageContext';
import { Sparkles, ArrowLeft } from 'lucide-react';

const ADMIN_USER_CORRECT = 'zqadmin';
const ADMIN_PASSWORD_CORRECT = 'ZQADMIN2024';

// Sample initial user posts so public wall isn't empty on first visit
const INITIAL_USER_POSTS: UserPost[] = [
  {
    id: 'upost-demo-1',
    userName: 'अमित राज',
    category: 'love',
    categoryName: '❤️ Love (प्यार)',
    text: 'तेरी यादों की खुशबू से महकती है शाम मेरी,\nतू ना हो तो वीरान सी लगती है हर सुबह मेरी।\nरब से मांगी है बस एक यही दुआ हमने,\nहमेशा सलामत रहे ये मोहब्बत तेरी और मेरी।',
    date: '22 Oct 2026',
    timestamp: Date.now() - 3600000,
    likes: 18,
    reportsCount: 0,
    comments: [
      {
        id: 'c-1',
        userName: 'रिया शर्मा',
        text: 'बहुत ही खूबसूरत और दिल को छू लेने वाली पंक्तियाँ! 🌸',
        date: '22 Oct 2026',
        likes: 3
      }
    ]
  },
  {
    id: 'upost-demo-2',
    userName: 'विकास राजपूत',
    category: 'attitude',
    categoryName: '🦁 Attitude (तेवर)',
    text: 'हमसे मुकाबला करने की सोच भी मत रखना,\nहम वो हैं जो अपनी शर्तों पर जीते हैं और सिर उठाकर चलते हैं।\nजमाने का क्या है वो तो कल भी जलता था और आज भी जलता है!',
    date: '22 Oct 2026',
    timestamp: Date.now() - 7200000,
    likes: 32,
    reportsCount: 0,
    comments: []
  },
  {
    id: 'upost-demo-3',
    userName: 'पूजा वर्मा',
    category: 'diwali',
    categoryName: '🪔 Diwali (दीपावली)',
    text: 'दीप जलते रहें जगमगाते रहें,\nआप और हम यूँ ही खुशियाँ मनाते रहें।\nइस दीवाली आपके घर में लक्ष्मी जी का वास हो,\nहर दिन आपका सबसे खास हो!',
    date: '22 Oct 2026',
    timestamp: Date.now() - 10800000,
    likes: 45,
    reportsCount: 0,
    comments: [
      {
        id: 'c-2',
        userName: 'अजय',
        text: 'शुभ दीपावली! बहुत प्यारी विश! ✨🪔',
        date: '22 Oct 2026',
        likes: 5
      }
    ]
  }
];

export default function App() {
  const { globalLanguage, setGlobalLanguage, ui, isRtl } = useGlobalLanguage();
  const initialParsed = parseLocationToRoute(
    window.location.pathname,
    window.location.hash
  );

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(initialParsed.route);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>('hindi');
  const [selectedFestivalCat, setSelectedFestivalCat] = useState<string>(
    initialParsed.festivalCat || 'diwali'
  );
  const [selectedFeelingsCat, setSelectedFeelingsCat] = useState<string>(
    initialParsed.feelingsCat || 'love'
  );
  const [selectedValentineCat, setSelectedValentineCat] = useState<
    ValentineCategoryId | undefined
  >(initialParsed.valentineFocusCat);
  const [selectedValentineLang, setSelectedValentineLang] = useState<
    ValentineLangCode | undefined
  >(initialParsed.valentineLang);
  const [selectedStaticLang, setSelectedStaticLang] = useState<ValentineLangCode>(
    initialParsed.staticLang || 'hi'
  );
  const [selectedReligiousCat, setSelectedReligiousCat] = useState<ReligiousCategory>(
    initialParsed.religiousCat || 'sanatan-hindu'
  );
  const [selectedFamilyRitualCat, setSelectedFamilyRitualCat] = useState<FamilyRitualCategory>(
    initialParsed.familyRitualCat || 'newborn-babies'
  );
  const [selectedSpecialMonth, setSelectedSpecialMonth] = useState<MonthId | 'all'>(
    initialParsed.specialMonth || 'january'
  );
  const [currentPage, setCurrentPage] = useState<number>(initialParsed.page || 1);
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [searchVisibleCount, setSearchVisibleCount] = useState(24);

  // 1. ZQ Official Shayaris (stored in zqOfficialShayaris localStorage)
  const [zqOfficialShayaris, setZqOfficialShayaris] = useState<Shayari[]>(() => {
    try {
      const saved = localStorage.getItem('zqOfficialShayaris');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return ZQ_OFFICIAL_DEFAULTS;
  });

  // 2. User Public Wall Posts (stored in userShayaris localStorage)
  const [userPosts, setUserPosts] = useState<UserPost[]>(() => {
    try {
      const saved = localStorage.getItem('userShayaris');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_USER_POSTS;
  });

  // 3. Custom User-Written Shayaris (stored in dil_ki_awaaz_custom_shayaris localStorage)
  const [customShayaris, setCustomShayaris] = useState<Shayari[]>(() => {
    try {
      const saved = localStorage.getItem('dil_ki_awaaz_custom_shayaris');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 3b. Global Auto-Approved Shayaris from Firebase collection "shayaris"
  const [globalShayaris, setGlobalShayaris] = useState<GlobalShayariItem[]>([]);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState<boolean>(true);

  // 4. Favorites (Pasandida)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dil_ki_awaaz_favorites');
      return saved ? JSON.parse(saved) : ['diwali-1'];
    } catch {
      return ['diwali-1'];
    }
  });

  // Modals state
  const [modalShayari, setModalShayari] = useState<Shayari | null>(null);
  const [modalFont, setModalFont] = useState<FontStyleId>('normal');

  // Comments modal state
  const [commentsModalOpen, setCommentsModalOpen] = useState(false);
  const [commentsTargetId, setCommentsTargetId] = useState('');
  const [commentsTargetTitle, setCommentsTargetTitle] = useState('');
  const [activeCommentsList, setActiveCommentsList] = useState<CommentItem[]>([]);

  // Admin panel state
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Sync state to localStorages
  useEffect(() => {
    try {
      localStorage.setItem('zqOfficialShayaris', JSON.stringify(zqOfficialShayaris));
    } catch {
      // ignore
    }
  }, [zqOfficialShayaris]);

  useEffect(() => {
    try {
      localStorage.setItem('userShayaris', JSON.stringify(userPosts));
    } catch {
      // ignore
    }
  }, [userPosts]);

  useEffect(() => {
    try {
      localStorage.setItem('dil_ki_awaaz_custom_shayaris', JSON.stringify(customShayaris));
    } catch {
      // ignore
    }
  }, [customShayaris]);

  useEffect(() => {
    try {
      localStorage.setItem('dil_ki_awaaz_favorites', JSON.stringify(favoriteIds));
    } catch {
      // ignore
    }
  }, [favoriteIds]);

  // Ensure a unique visitor userId is generated and saved in localStorage on first visit,
  // and subscribe in real time to approved shayaris in Firebase collection "shayaris"
  useEffect(() => {
    getOrCreateLocalUserId();
    const unsubscribe = subscribeApprovedShayaris(
      (items) => {
        setGlobalShayaris(items);
        setIsLoadingGlobal(false);
      },
      () => {
        setIsLoadingGlobal(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Universal canonical URL normalization runs inside the SEO effect below

  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseLocationToRoute(window.location.pathname, window.location.hash);
      setCurrentRoute(parsed.route);
      if (parsed.festivalCat) setSelectedFestivalCat(parsed.festivalCat);
      if (parsed.feelingsCat) setSelectedFeelingsCat(parsed.feelingsCat);
      setSelectedValentineCat(parsed.valentineFocusCat);
      setSelectedValentineLang(parsed.valentineLang);
      setSelectedStaticLang(parsed.staticLang || 'hi');
      if (parsed.religiousCat) setSelectedReligiousCat(parsed.religiousCat);
      if (parsed.familyRitualCat) setSelectedFamilyRitualCat(parsed.familyRitualCat);
      if (parsed.specialMonth) setSelectedSpecialMonth(parsed.specialMonth);
      setCurrentPage(parsed.page || 1);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    setSearchVisibleCount(24);
  }, [deferredSearchQuery]);

  const [lazyShayariPool, setLazyShayariPool] = useState<{
    shayariList: Shayari[];
    maafiSpecialShayaris: Shayari[];
    religiousShayaris: Shayari[];
    familyRitualsShayaris: Shayari[];
    specialShayaris: Shayari[];
    valentineShayaris: Shayari[];
    static35Loader?: typeof import('./data/static35/static35Loader');
  } | null>(null);

  useEffect(() => {
    if (lazyShayariPool) return;
    let cancelled = false;
    const delayMs =
      !searchQuery.trim() && currentRoute === 'home' && currentPage <= 1 ? 80 : 0;

    const timer = window.setTimeout(() => {
      Promise.all([
        import('./data/shayariData'),
        import('./zq-mansoon-special/data'),
        import('./data/valentineWeekBase'),
        import('./data/static35/static35Loader')
      ])
        .then(([mainData, specialData, valentineData, s35Loader]) => {
          if (cancelled) return;
          setLazyShayariPool({
            shayariList: mainData.SHAYARI_LIST,
            maafiSpecialShayaris: mainData.MAAFI_SPECIAL_SHAYARIS,
            religiousShayaris: mainData.RELIGIOUS_SHAYARIS,
            familyRitualsShayaris: mainData.FAMILY_RITUALS_SHAYARIS,
            specialShayaris: specialData.ALL_SPECIAL_SHAYARI_AS_SHAYARI,
            valentineShayaris: valentineData.VALENTINE_SHAYARIS_AS_STANDARD,
            static35Loader: s35Loader
          });
        })
        .catch(() => {
          // ignore transient chunk load failure
        });
    }, delayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [searchQuery, currentRoute, currentPage, lazyShayariPool]);

  const [, setStatic35PackTick] = useState(0);
  useEffect(() => {
    const loader = lazyShayariPool?.static35Loader;
    if (!loader) return;
    const isStaticRoute =
      currentRoute === 'feelings' ||
      (currentRoute === 'festival' && isHoliday35Category(selectedFestivalCat));
    if (!isStaticRoute) return;
    if (loader.isStatic35LanguageReady(selectedStaticLang)) return;

    let cancelled = false;
    loader
      .ensureStatic35LanguageLoaded(selectedStaticLang)
      .then(() => {
        if (!cancelled) setStatic35PackTick((n) => n + 1);
      })
      .catch(() => {
        // ignore
      });
    return () => {
      cancelled = true;
    };
  }, [lazyShayariPool, currentRoute, selectedFestivalCat, selectedStaticLang]);

  // Dynamically sync Meta Title, Meta Description, OpenGraph, Canonical & Schema.org Article/Poem JSON-LD
  useEffect(() => {
    const seoMeta = getSeoMetadataForState({
      route: currentRoute,
      festivalCat: selectedFestivalCat,
      feelingsCat: selectedFeelingsCat,
      valentineCat: selectedValentineCat,
      valentineLang: selectedValentineLang,
      staticLang: selectedStaticLang,
      religiousCat: selectedReligiousCat,
      familyRitualCat: selectedFamilyRitualCat,
      specialMonth: selectedSpecialMonth,
      page: currentPage,
      searchQuery: deferredSearchQuery
    });

    // Normalize any legacy/short alias URL (e.g. /love-shayari -> /feelings/love-shayari/) to its exact clean canonical path
    if (!deferredSearchQuery.trim() && typeof window !== 'undefined') {
      const currentPathname = window.location.pathname;
      const lowerHash = window.location.hash.toLowerCase();
      const hasLegacyRouteHash =
        lowerHash.includes('zq-moments') ||
        lowerHash.includes('admin-zq') ||
        lowerHash.includes('apni-shayari') ||
        lowerHash.includes('favorite') ||
        lowerHash.includes('pasandida') ||
        lowerHash.includes('zq-feelings') ||
        lowerHash.includes('zq-official') ||
        lowerHash.includes('zq-mansoon-special') ||
        lowerHash.includes('festival') ||
        lowerHash.includes('feelings');

      if (currentPathname !== seoMeta.canonicalPath || hasLegacyRouteHash) {
        try {
          const preservedSearch = window.location.search || '';
          const preservedHash = hasLegacyRouteHash ? '' : window.location.hash || '';
          window.history.replaceState(
            { route: currentRoute },
            '',
            `${seoMeta.canonicalPath}${preservedSearch}${preservedHash}`
          );
        } catch {
          // ignore
        }
      }
    }

    const shayariList = lazyShayariPool?.shayariList ?? [];
    const maafiList = lazyShayariPool?.maafiSpecialShayaris ?? [];
    const religiousList = lazyShayariPool?.religiousShayaris ?? [];
    const familyRitualsList = lazyShayariPool?.familyRitualsShayaris ?? [];
    const specialList = lazyShayariPool?.specialShayaris ?? [];
    const valentineList = lazyShayariPool?.valentineShayaris ?? [];
    const s35Loader = lazyShayariPool?.static35Loader;

    const localizeStatic35Poems = (items: Shayari[]): Shayari[] => {
      if (!s35Loader) return items.slice(0, 8);
      return items.slice(0, 8).map((poem) => ({
        ...poem,
        title: s35Loader.getStatic35ShayariTitle(poem, selectedStaticLang),
        lines: [...s35Loader.getStatic35ShayariLines(poem, selectedStaticLang)]
      }));
    };

    let samplePoems: Shayari[] = [];
    if (currentRoute === 'valentine-week') {
      samplePoems = selectedValentineCat
        ? valentineList
            .filter((s) => s.id.startsWith(`vw-${selectedValentineCat}-`))
            .slice(0, 8)
        : valentineList.slice(0, 8);
    } else if (currentRoute === 'festival') {
      const festMatches = shayariList.filter(
        (s) =>
          s.categoryType === 'festival' &&
          (selectedFestivalCat === 'all' || s.category === selectedFestivalCat)
      );
      samplePoems = isHoliday35Category(selectedFestivalCat)
        ? localizeStatic35Poems(festMatches)
        : festMatches.slice(0, 8);
    } else if (currentRoute === 'feelings') {
      let feelMatches: Shayari[] = [];
      if (VALID_MAAFI_CAT_IDS.has(selectedFeelingsCat)) {
        feelMatches = maafiList.filter((s) => s.category === selectedFeelingsCat);
      } else if (selectedFeelingsCat === 'all') {
        feelMatches = shayariList.filter(
          (s) =>
            VALID_FEELINGS_MAIN_CAT_IDS.has(String(s.category)) ||
            VALID_MAAFI_CAT_IDS.has(String(s.category))
        );
      } else {
        feelMatches = shayariList.filter((s) => s.category === selectedFeelingsCat);
      }
      samplePoems = localizeStatic35Poems(feelMatches);
    } else if (currentRoute === 'religious') {
      samplePoems = religiousList.filter((s) => s.category === selectedReligiousCat);
    } else if (currentRoute === 'family-rituals') {
      samplePoems = familyRitualsList.filter((s) => s.category === selectedFamilyRitualCat);
    } else if (currentRoute === 'zq-mansoon-special') {
      samplePoems = specialList;
    } else if (currentRoute === 'public-wall' || currentRoute === 'zq-moments') {
      // Strict E-E-A-T separation: Guest UGC feeds do not claim ZQ Organization editorial Poem entities
      samplePoems = [];
    } else if (currentRoute === 'favorites') {
      const allPool = [
        ...INITIAL_APNI_SHAYARI_SEEDS,
        ...customShayaris,
        ...shayariList,
        ...specialList,
        ...valentineList
      ];
      samplePoems = allPool.filter((s) => favoriteIds.includes(s.id));
    } else {
      samplePoems = zqOfficialShayaris.slice(0, 8);
    }

    syncDocumentSeo(seoMeta, samplePoems);
  }, [
    currentRoute,
    selectedFestivalCat,
    selectedFeelingsCat,
    selectedValentineCat,
    selectedValentineLang,
    selectedStaticLang,
    selectedReligiousCat,
    selectedFamilyRitualCat,
    selectedSpecialMonth,
    currentPage,
    deferredSearchQuery,
    customShayaris,
    favoriteIds,
    lazyShayariPool,
    zqOfficialShayaris
  ]);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev]
    );
  };

  const handleSaveCustomShayari = (newShayari: Shayari): number => {
    setCustomShayaris((prev) => [newShayari, ...prev.filter((s) => s.id !== newShayari.id)]);
    const nextFavIds = favoriteIds.includes(newShayari.id)
      ? favoriteIds
      : [newShayari.id, ...favoriteIds];
    setFavoriteIds(nextFavIds);
    return nextFavIds.length;
  };

  const handleDeleteCustomShayari = (id: string) => {
    setCustomShayaris((prev) => prev.filter((s) => s.id !== id));
    setFavoriteIds((prev) => prev.filter((favId) => favId !== id));
  };

  const isFavorite = (id: string) => favoriteIds.includes(id);

  const pushCleanUrl = (url: string, route: AppRoute) => {
    try {
      if (`${window.location.pathname}${window.location.search}` !== url) {
        window.history.pushState({ route }, '', url);
      }
    } catch {
      // ignore
    }
  };

  const navigateTo = (
    route: AppRoute,
    category?: string,
    page: number = 1,
    staticLang?: ValentineLangCode
  ) => {
    setCurrentRoute(route);
    setCurrentPage(page);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let newUrl = '/';
    if (route === 'festival') {
      const nextCat = category || 'all';
      setSelectedFestivalCat(nextCat);
      if (isHoliday35Category(nextCat)) {
        const langCode = staticLang || 'hi';
        setSelectedStaticLang(langCode);
        newUrl = buildHoliday35CleanPath(nextCat, langCode, page);
      } else {
        newUrl = category ? buildCleanSeoUrl('festival', nextCat, undefined, page) : '/festival-shayari';
      }
    } else if (route === 'feelings') {
      const nextCat = category || 'all';
      setSelectedFeelingsCat(nextCat);
      const langCode = staticLang || 'hi';
      setSelectedStaticLang(langCode);
      newUrl = category ? buildCleanSeoUrl('feelings', nextCat, langCode, page) : '/feelings-shayari';
    } else if (route === 'religious') {
      const nextRelCat = (category || 'sanatan-hindu') as ReligiousCategory;
      setSelectedReligiousCat(nextRelCat);
      newUrl = buildCleanSeoUrl('religious', nextRelCat);
    } else if (route === 'family-rituals') {
      const nextRitCat = (category || 'newborn-babies') as FamilyRitualCategory;
      setSelectedFamilyRitualCat(nextRitCat);
      newUrl = buildCleanSeoUrl('family-rituals', nextRitCat);
    } else if (route === 'zq-mansoon-special') {
      const nextMonth = (category || 'all') as MonthId | 'all';
      setSelectedSpecialMonth(nextMonth);
      newUrl = category
        ? buildCleanSeoUrl('zq-mansoon-special', category)
        : '/12-months-special-days-shayari';
    } else if (route === 'valentine-week') {
      const nextValCat = category as ValentineCategoryId | undefined;
      setSelectedValentineCat(nextValCat);
      setSelectedValentineLang(undefined);
      newUrl = buildCleanSeoUrl('valentine-week', nextValCat);
    } else {
      newUrl = buildCleanSeoUrl(route, undefined, undefined, page);
    }

    pushCleanUrl(newUrl, route);
  };

  const handleSelectValentineCategory = (catId?: ValentineCategoryId) => {
    setCurrentRoute('valentine-week');
    setSelectedValentineCat(catId);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const nextPath = selectedValentineLang
      ? buildValentineCleanPath(catId, selectedValentineLang, false)
      : buildCleanSeoUrl('valentine-week', catId);
    pushCleanUrl(nextPath, 'valentine-week');
  };

  const handleSelectValentineLanguageUrl = (
    lang: ValentineLangCode,
    catId?: ValentineCategoryId
  ) => {
    setSelectedValentineLang(lang);
    setCurrentPage(1);
    const cleanPath = buildValentineCleanPath(catId, lang, false);
    pushCleanUrl(cleanPath, 'valentine-week');
  };

  const handleSelectFestivalCategory = (catId: string, lang?: ValentineLangCode) => {
    setSelectedFestivalCat(catId);
    setCurrentPage(1);
    if (isHoliday35Category(catId)) {
      const targetLang = lang || selectedStaticLang || 'hi';
      setSelectedStaticLang(targetLang);
      pushCleanUrl(buildHoliday35CleanPath(catId, targetLang, 1), 'festival');
    } else {
      pushCleanUrl(buildCleanSeoUrl('festival', catId), 'festival');
    }
  };

  const handleSelectHolidayLanguageUrl = (
    lang: ValentineLangCode,
    holidayId: Holiday35Id
  ) => {
    setSelectedStaticLang(lang);
    setCurrentPage(1);
    pushCleanUrl(buildHoliday35CleanPath(holidayId, lang, 1), 'festival');
  };

  const handleSelectFeelingsCategory = (catId: string, lang?: ValentineLangCode) => {
    const targetLang = lang || selectedStaticLang || 'hi';
    setSelectedStaticLang(targetLang);
    setSelectedFeelingsCat(catId);
    setCurrentPage(1);
    pushCleanUrl(buildFeelingsCleanPath(catId, targetLang, 1, false), 'feelings');
  };

  const handleSelectFeelingsLanguageUrl = (lang: ValentineLangCode, catId: string) => {
    setSelectedStaticLang(lang);
    setCurrentPage(1);
    pushCleanUrl(buildFeelingsCleanPath(catId, lang, 1, false), 'feelings');
  };

  // Sync Header 35-Language Dropdown changes onto Static-35 & Valentine routes
  const prevGlobalLangRef = useRef(globalLanguage);
  useEffect(() => {
    if (prevGlobalLangRef.current === globalLanguage) return;
    prevGlobalLangRef.current = globalLanguage;
    if (globalLanguage === 'default') return;

    const mappedCode = STATIC35_CODE_BY_GLOBAL_ID[globalLanguage];
    if (!mappedCode) return;

    if (currentRoute === 'feelings') {
      setSelectedStaticLang(mappedCode);
      setCurrentPage(1);
    } else if (currentRoute === 'festival' && isHoliday35Category(selectedFestivalCat)) {
      setSelectedStaticLang(mappedCode);
      setCurrentPage(1);
    } else if (currentRoute === 'valentine-week') {
      setSelectedValentineLang(mappedCode);
      setCurrentPage(1);
    }
  }, [
    globalLanguage,
    currentRoute,
    selectedFeelingsCat,
    selectedFestivalCat,
    selectedValentineCat
  ]);

  const handleSelectReligiousCategory = (catId: ReligiousCategory) => {
    setSelectedReligiousCat(catId);
    setCurrentPage(1);
    pushCleanUrl(buildCleanSeoUrl('religious', catId), 'religious');
  };

  const handleSelectFamilyRitualCategory = (catId: FamilyRitualCategory) => {
    setSelectedFamilyRitualCat(catId);
    setCurrentPage(1);
    pushCleanUrl(buildCleanSeoUrl('family-rituals', catId), 'family-rituals');
  };

  const handleSelectSpecialMonth = (mId: MonthId | 'all') => {
    setSelectedSpecialMonth(mId);
    setCurrentPage(1);
    pushCleanUrl(buildCleanSeoUrl('zq-mansoon-special', mId), 'zq-mansoon-special');
  };

  // Open Card Download Modal
  const handleOpenCardModal = (shayari: Shayari, selectedFont: FontStyleId) => {
    setModalShayari(shayari);
    setModalFont(selectedFont);
  };

  // Open Comments Modal
  const handleOpenComments = (targetId: string, targetTitle: string, initialComments: CommentItem[]) => {
    setCommentsTargetId(targetId);
    setCommentsTargetTitle(targetTitle);
    setActiveCommentsList(initialComments);
    setCommentsModalOpen(true);
  };

  // Handle adding new comment
  const handleAddComment = (newComment: CommentItem) => {
    setActiveCommentsList((prev) => [newComment, ...prev]);

    // Update in userPosts if target is user post
    setUserPosts((prev) =>
      prev.map((post) => {
        if (post.id === commentsTargetId) {
          return {
            ...post,
            comments: [newComment, ...(post.comments || [])]
          };
        }
        return post;
      })
    );

    // Update in zqOfficialShayaris if target is official post
    setZqOfficialShayaris((prev) =>
      prev.map((s) => {
        if (s.id === commentsTargetId) {
          const updated = [newComment, ...(s.comments || [])];
          return {
            ...s,
            comments: updated,
            commentsCount: updated.length
          };
        }
        return s;
      })
    );
  };

  const handleDeleteUserPost = (postId: string) => {
    setUserPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  // Admin Actions
  const handleAdminLogin = (user: string, pass: string): boolean => {
    if (user.toLowerCase() === ADMIN_USER_CORRECT && pass === ADMIN_PASSWORD_CORRECT) {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
  };

  const handleAddOfficialShayari = (newShayari: Shayari) => {
    setZqOfficialShayaris((prev) => [newShayari, ...prev]);
  };

  const activeSearchTerm = deferredSearchQuery.trim();

  // Pre-indexed Global Search Pool built lazily only when searching
  const indexedSearchable = useMemo(() => {
    if (!activeSearchTerm) return [];
    const rawSearchable = [
      ...globalShayaris,
      ...customShayaris,
      ...zqOfficialShayaris,
      ...(lazyShayariPool?.shayariList ?? []),
      ...(lazyShayariPool?.specialShayaris ?? []),
      ...(lazyShayariPool?.valentineShayaris ?? [])
    ];
    const seenSearchIds = new Set<string>();
    const out: Array<{ item: Shayari; searchBlob: string }> = [];

    for (const s of rawSearchable) {
      if (seenSearchIds.has(s.id)) continue;
      seenSearchIds.add(s.id);
      const searchBlob = [
        s.title,
        s.category,
        s.categoryName,
        ...(s.linesHindi || s.lines),
        ...(s.linesHinglish || []),
        ...(s.linesEnglish || []),
        ...(s.linesUrdu || []),
        ...(s.tags || [])
      ]
        .join(' ')
        .toLowerCase();
      out.push({ item: s, searchBlob });
    }
    return out;
  }, [activeSearchTerm, globalShayaris, customShayaris, zqOfficialShayaris, lazyShayariPool]);

  const matchingSearchShayaris = useMemo(() => {
    if (!activeSearchTerm) return [];
    const qLower = activeSearchTerm.toLowerCase();
    return indexedSearchable
      .filter((entry) => entry.searchBlob.includes(qLower))
      .map((entry) => entry.item);
  }, [indexedSearchable, activeSearchTerm]);

  const visibleSearchShayaris = useMemo(
    () => matchingSearchShayaris.slice(0, searchVisibleCount),
    [matchingSearchShayaris, searchVisibleCount]
  );

  // Homepage '/' stays 100% editorial & verified (Guest UGC stays strictly on /apni-shayari-likhe & /zq-moments)
  const homepageTrendingShayaris = useMemo(() => {
    const combined = [
      ...zqOfficialShayaris,
      ...(lazyShayariPool?.shayariList ?? [])
    ];
    const seen = new Set<string>();
    const out: Shayari[] = [];
    for (const s of combined) {
      if (seen.has(s.id)) continue;
      seen.add(s.id);
      out.push(s);
      if (out.length >= 40) break;
    }
    return out;
  }, [zqOfficialShayaris, lazyShayariPool]);

  // Curated site shayari texts used on /apni-shayari-likhe to auto-reject >=80% copied submissions
  const curatedReferenceTexts = useMemo<string[]>(() => {
    if (currentRoute !== 'public-wall') return [];
    const pool = [
      ...zqOfficialShayaris,
      ...(lazyShayariPool?.shayariList ?? []),
      ...(lazyShayariPool?.valentineShayaris ?? [])
    ];
    return pool.map((s) => (s.linesHindi || s.lines).join(' '));
  }, [currentRoute, zqOfficialShayaris, lazyShayariPool]);

  const isLegalRoute =
    currentRoute === 'about' ||
    currentRoute === 'privacy' ||
    currentRoute === 'terms' ||
    currentRoute === 'disclaimer' ||
    currentRoute === 'contact';

  const activeCategoryForHeader = useMemo(() => {
    if (currentRoute === 'festival') return selectedFestivalCat;
    if (currentRoute === 'feelings') return selectedFeelingsCat;
    if (currentRoute === 'religious') return selectedReligiousCat;
    if (currentRoute === 'family-rituals') return selectedFamilyRitualCat;
    return undefined;
  }, [
    currentRoute,
    selectedFestivalCat,
    selectedFeelingsCat,
    selectedReligiousCat,
    selectedFamilyRitualCat
  ]);

  const effectiveCardLanguage: LanguageType =
    globalLanguage === 'english'
      ? 'english'
      : globalLanguage === 'urdu'
        ? 'urdu'
        : 'hindi';

  return (
    <div className="relative min-h-screen bg-white text-slate-800 flex flex-col font-poppins selection:bg-[#d94f70] selection:text-white">
      {/* 2. THEME: WHITE BACKGROUND WITH LIGHT PINK AMBIENCE & PASTEL FLOATING HEARTS */}
      <ConfettiSparkles />

      {/* Website Header with 3D Pink Headline and 4 Main Buttons */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        favoritesCount={favoriteIds.length}
        activeCategory={activeCategoryForHeader}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If user is searching globally */}
        {activeSearchTerm ? (
          <div
            dir={isRtl ? 'rtl' : 'ltr'}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ffe4e8] pb-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-[#d94f70]" />
                {currentRoute === 'home' ? (
                  <h2 className="font-rozha text-[26px] font-bold text-[#d94f70]">
                    {ui.searchResultsHeading}
                  </h2>
                ) : (
                  <h1 className="font-rozha text-[26px] font-bold text-[#d94f70]">
                    {ui.searchResultsHeading}
                  </h1>
                )}
                <span className="text-[16px] bg-[#fff0f3] text-[#d94f70] px-3.5 py-1 rounded-full border border-[#ffe4e8] font-bold">
                  "{activeSearchTerm}" ({matchingSearchShayaris.length})
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="min-h-[42px] px-4 py-2 rounded-xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffe4e8] text-[15px] flex items-center gap-1.5 cursor-pointer font-bold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{ui.closeSearchBtn}</span>
                </button>
              </div>
            </div>

            {visibleSearchShayaris.length > 0 ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
                  {visibleSearchShayaris.map((shayari) => (
                    <ShayariCard
                      key={shayari.id}
                      shayari={shayari}
                      isFavorite={isFavorite(shayari.id)}
                      onToggleFavorite={toggleFavorite}
                      currentLanguage={effectiveCardLanguage}
                      onOpenCardModal={handleOpenCardModal}
                      onOpenComments={(s) =>
                        handleOpenComments(s.id, s.title, s.comments || [])
                      }
                    />
                  ))}
                </div>

                {matchingSearchShayaris.length > searchVisibleCount && (
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setSearchVisibleCount((prev) => prev + 24)}
                      className="min-h-[54px] px-8 py-3.5 rounded-2xl btn-glossy-pink text-white text-[18px] font-bold cursor-pointer shadow-sm"
                    >
                      {ui.loadMoreShayari} (+{matchingSearchShayaris.length - searchVisibleCount})
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#fff8f9] rounded-3xl border border-[#ffe4e8] p-7">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-[26px] font-bold text-slate-800">
                  "{activeSearchTerm}" — {ui.noShayariFound}
                </h3>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-5 min-h-[52px] px-6 py-3 bg-[#d94f70] text-white rounded-2xl text-[18px] font-bold cursor-pointer hover:bg-[#b32f4f]"
                >
                  {ui.viewAllShayari}
                </button>
              </div>
            )}
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="py-16 text-center text-[#d94f70] font-bold text-lg">Loading...</div>
            }
          >
            {/* ROUTE: HOME PAGE */}
            {currentRoute === 'home' && (
              <HomePage
                onOpenFestival={(cat, lang, page) => navigateTo('festival', cat, page || 1, lang)}
                onOpenFeelings={(cat) => navigateTo('feelings', cat)}
                onOpenValentineWeek={(cat) => navigateTo('valentine-week', cat)}
                onOpenReligious={(cat) => navigateTo('religious', cat)}
                onOpenFamilyRituals={(cat) => navigateTo('family-rituals', cat)}
                onOpenMansoonSpecial={(monthId) => navigateTo('zq-mansoon-special', monthId)}
                onOpenWriteShayari={() => navigateTo('public-wall')}
                onOpenZqMoments={() => navigateTo('zq-moments')}
                trendingShayaris={homepageTrendingShayaris}
                currentPage={currentPage}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  pushCleanUrl(buildCleanSeoUrl('home', undefined, undefined, pg), 'home');
                }}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                currentLanguage={effectiveCardLanguage}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={(s) =>
                  handleOpenComments(s.id, s.title, s.comments || [])
                }
              />
            )}

            {/* ROUTE: VALENTINE WEEK HUB (/valentine-week) + 15 DEDICATED CATEGORY PAGES (/valentine-week/<day>-shayari/<lang>) */}
            {currentRoute === 'valentine-week' && (
              <ValentineWeekPage
                activeCategory={selectedValentineCat}
                initialLang={selectedValentineLang}
                initialPage={currentPage}
                onSelectCategory={handleSelectValentineCategory}
                onSelectLanguageUrl={handleSelectValentineLanguageUrl}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  if (selectedValentineCat) {
                    pushCleanUrl(
                      buildCleanSeoUrl(
                        'valentine-week',
                        selectedValentineCat,
                        selectedValentineLang,
                        pg
                      ),
                      'valentine-week'
                    );
                  }
                }}
                onNavigateHome={() => navigateTo('home')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
              />
            )}

            {/* ROUTE: RELIGIOUS SHAYARI (4 Separate Folders: Hindu 100, Islamic 100, Christian 60, Sikh 50) */}
            {currentRoute === 'religious' && (
              <ReligiousPage
                initialCategory={selectedReligiousCat}
                initialPage={currentPage}
                onSelectCategory={handleSelectReligiousCategory}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  pushCleanUrl(
                    buildCleanSeoUrl('religious', selectedReligiousCat, undefined, pg),
                    'religious'
                  );
                }}
                getPageHref={(pg) =>
                  buildCleanSeoUrl('religious', selectedReligiousCat, undefined, pg)
                }
                onNavigateHome={() => navigateTo('home')}
                onNavigateFeelings={() => navigateTo('feelings', 'love')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={(s) =>
                  handleOpenComments(s.id, s.title, s.comments || [])
                }
              />
            )}

            {/* ROUTE: SANSKAR & FAMILY RITUALS (4 Folders: Newborn Baby 100, Godh Bharai 50, Naamkaran & Mundan 50, Grah Pravesh 50) */}
            {currentRoute === 'family-rituals' && (
              <FamilyRitualsPage
                initialCategory={selectedFamilyRitualCat}
                initialPage={currentPage}
                onSelectCategory={handleSelectFamilyRitualCategory}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  pushCleanUrl(
                    buildCleanSeoUrl('family-rituals', selectedFamilyRitualCat, undefined, pg),
                    'family-rituals'
                  );
                }}
                getPageHref={(pg) =>
                  buildCleanSeoUrl('family-rituals', selectedFamilyRitualCat, undefined, pg)
                }
                onNavigateHome={() => navigateTo('home')}
                onNavigateFeelings={() => navigateTo('feelings', 'love')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={(s) =>
                  handleOpenComments(s.id, s.title, s.comments || [])
                }
              />
            )}

            {/* ROUTE: ZQ-MOMENTS 💗 GLOBAL REAL-TIME SOCIAL FEED */}
            {currentRoute === 'zq-moments' && (
              <ZqMomentsPage onNavigateHome={() => navigateTo('home')} />
            )}

            {/* ROUTE: ZQ-MANSOON-SPECIAL (12 MONTHS WORLD SPECIAL DAYS) */}
            {currentRoute === 'zq-mansoon-special' && (
              <ZqMansoonSpecialPage
                initialMonth={selectedSpecialMonth}
                initialPage={currentPage}
                onSelectMonth={handleSelectSpecialMonth}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  pushCleanUrl(
                    buildCleanSeoUrl('zq-mansoon-special', selectedSpecialMonth, undefined, pg),
                    'zq-mansoon-special'
                  );
                }}
                getPageHref={(pg) =>
                  buildCleanSeoUrl('zq-mansoon-special', selectedSpecialMonth, undefined, pg)
                }
                onNavigateHome={() => navigateTo('home')}
                onNavigateFestival={() => navigateTo('festival')}
                onNavigateFeelings={() => navigateTo('feelings')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={(s) =>
                  handleOpenComments(s.id, s.title, s.comments || [])
                }
              />
            )}

            {/* BUTTON 1 - FESTIVAL: 27 festival categories (New Year & Christmas in 35 Static Languages) */}
            {currentRoute === 'festival' && (
              <FestivalPage
                initialCategory={selectedFestivalCat}
                initialLang={
                  isHoliday35Category(selectedFestivalCat) ? selectedStaticLang : undefined
                }
                initialPage={currentPage}
                onSelectCategory={handleSelectFestivalCategory}
                onSelectLanguageUrl={handleSelectHolidayLanguageUrl}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  pushCleanUrl(
                    buildCleanSeoUrl(
                      'festival',
                      selectedFestivalCat,
                      isHoliday35Category(selectedFestivalCat) ? selectedStaticLang : undefined,
                      pg
                    ),
                    'festival'
                  );
                }}
                getPageHref={(pg) =>
                  buildCleanSeoUrl(
                    'festival',
                    selectedFestivalCat,
                    isHoliday35Category(selectedFestivalCat) ? selectedStaticLang : undefined,
                    pg
                  )
                }
                onNavigateHome={() => navigateTo('home')}
                onNavigateFeelings={() => navigateTo('feelings')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={(s) =>
                  handleOpenComments(s.id, s.title, s.comments || [])
                }
              />
            )}

            {/* BUTTON 2 - FEELINGS: 32 Feelings categories in 35 Static Languages */}
            {currentRoute === 'feelings' && (
              <FeelingsPage
                initialCategory={selectedFeelingsCat}
                initialLang={selectedStaticLang}
                initialPage={currentPage}
                onSelectCategory={handleSelectFeelingsCategory}
                onSelectLanguageUrl={handleSelectFeelingsLanguageUrl}
                onPageChange={(pg) => {
                  setCurrentPage(pg);
                  pushCleanUrl(
                    buildCleanSeoUrl('feelings', selectedFeelingsCat, selectedStaticLang, pg),
                    'feelings'
                  );
                }}
                getPageHref={(pg) =>
                  buildCleanSeoUrl('feelings', selectedFeelingsCat, selectedStaticLang, pg)
                }
                onNavigateHome={() => navigateTo('home')}
                onNavigateFestival={() => navigateTo('festival')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={(s) =>
                  handleOpenComments(s.id, s.title, s.comments || [])
                }
              />
            )}

            {/* BUTTON 3 - ZQ-FEELINGS 👑: OFFICIAL ADMIN ONLY POSTING */}
            {currentRoute === 'zq-official' && (
              <ZqOfficialPage
                officialShayaris={zqOfficialShayaris}
                onOpenAdminModal={() => setAdminModalOpen(true)}
                onNavigateHome={() => navigateTo('home')}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
                onOpenCardModal={handleOpenCardModal}
                onOpenComments={handleOpenComments}
              />
            )}

            {/* BUTTON 4 - APNI SHAYARI LIKHEIN ✍️: GLOBAL AUTO-APPROVE SHAYARI */}
            {currentRoute === 'public-wall' && (
              <PublicWall
                globalShayaris={globalShayaris}
                curatedReferenceTexts={curatedReferenceTexts}
                isLoadingGlobal={isLoadingGlobal}
                favoritesCount={favoriteIds.length}
                isFavorite={isFavorite}
                onSaveCustomShayari={handleSaveCustomShayari}
                onDeleteCustomShayari={handleDeleteCustomShayari}
                onToggleFavorite={toggleFavorite}
                onNavigateHome={() => navigateTo('home')}
                onOpenFavorites={() => navigateTo('favorites')}
                onOpenCardModal={handleOpenCardModal}
              />
            )}

            {/* ROUTE: FAVORITES (PASANDIDA) */}
            {currentRoute === 'favorites' && (
              <FavoritesPage
                favoriteIds={favoriteIds}
                customShayaris={[
                  ...INITIAL_APNI_SHAYARI_SEEDS,
                  ...globalShayaris,
                  ...customShayaris
                ]}
                onNavigateHome={() => navigateTo('home')}
                onOpenWriteShayari={() => navigateTo('public-wall')}
                onToggleFavorite={toggleFavorite}
                currentLanguage={effectiveCardLanguage}
                onOpenCardModal={handleOpenCardModal}
              />
            )}

            {/* ROUTE: /admin-zq (Password: zqadmin2026) */}
            {currentRoute === 'admin-zq' && (
              <AdminZqPage
                globalShayaris={globalShayaris}
                isLoadingGlobal={isLoadingGlobal}
                onDeleteLocalCopy={handleDeleteCustomShayari}
                onNavigateHome={() => navigateTo('home')}
              />
            )}

            {/* LEGAL & SUPPORT ROUTES (/about-us, /privacy-policy, /terms-and-conditions, /disclaimer, /contact-us) */}
            {isLegalRoute && (
              <LegalPage
                activeTab={currentRoute as LegalTabId}
                onSelectTab={(tab) => navigateTo(tab)}
                onNavigateHome={() => navigateTo('home')}
              />
            )}
          </Suspense>
        )}
      </main>

      {/* Website Footer */}
      <Footer
        onNavigateHome={() => navigateTo('home')}
        onNavigateFestival={(cat) => navigateTo('festival', cat)}
        onNavigateFeelings={(cat) => navigateTo('feelings', cat)}
        onNavigateValentine={() => navigateTo('valentine-week')}
        onNavigateReligious={() => navigateTo('religious', 'sanatan-hindu')}
        onNavigateFamilyRituals={() => navigateTo('family-rituals', 'newborn-babies')}
        onNavigateZqMoments={() => navigateTo('zq-moments')}
        onNavigateMansoonSpecial={() => navigateTo('zq-mansoon-special')}
        onNavigateWriteShayari={() => navigateTo('public-wall')}
        onNavigateFavorites={() => navigateTo('favorites')}
        onNavigateLegal={(tab) => navigateTo(tab)}
      />

      <Suspense fallback={null}>
        {commentsModalOpen && (
          <CommentsModal
            isOpen={commentsModalOpen}
            onClose={() => setCommentsModalOpen(false)}
            targetId={commentsTargetId}
            targetTitle={commentsTargetTitle}
            comments={activeCommentsList}
            onAddComment={handleAddComment}
          />
        )}

        {adminModalOpen && (
          <AdminPanelModal
            isOpen={adminModalOpen}
            onClose={() => setAdminModalOpen(false)}
            isAuthenticated={isAdminAuthenticated}
            onLogin={handleAdminLogin}
            onLogout={handleAdminLogout}
            onAddOfficialShayari={handleAddOfficialShayari}
            userPosts={userPosts}
            onDeleteUserPost={handleDeleteUserPost}
          />
        )}

        {modalShayari && (
          <CardDownloadModal
            shayari={modalShayari}
            selectedFont={modalFont}
            onClose={() => setModalShayari(null)}
          />
        )}
      </Suspense>

      <Analytics />
    </div>
  );
}
