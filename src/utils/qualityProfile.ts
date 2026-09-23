export type QualityTier = 'high' | 'medium' | 'low';

export interface QualitySettings {
  tier: QualityTier;
  dpr: number;
  shadows: boolean;
  shadowMapSize: number;
  antialias: boolean;
  lightComplexity: 'full' | 'medium' | 'low';
  isMobile: boolean;
}

export function detectDeviceQuality(): QualitySettings {
  if (typeof window === 'undefined') {
    return {
      tier: 'medium',
      dpr: 1.0,
      shadows: true,
      shadowMapSize: 512,
      antialias: true,
      lightComplexity: 'medium',
      isMobile: false,
    };
  }

  const rawDpr = window.devicePixelRatio || 1;
  const isMobile =
    window.innerWidth < 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const concurrency = navigator.hardwareConcurrency || 4;
  const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;
  const saveData = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData === true;

  // Determine Quality Tier
  let tier: QualityTier = 'high';

  if (saveData || (isMobile && (concurrency <= 4 || deviceMemory <= 2))) {
    tier = 'low';
  } else if (isMobile || concurrency <= 6 || window.innerWidth < 1024) {
    tier = 'medium';
  } else {
    tier = 'high';
  }

  // Profile Specific Tuning
  if (tier === 'low') {
    return {
      tier,
      dpr: 1.0,
      shadows: false,
      shadowMapSize: 256,
      antialias: false,
      lightComplexity: 'low',
      isMobile,
    };
  }

  if (tier === 'medium') {
    return {
      tier,
      dpr: Math.min(rawDpr, 1.25),
      shadows: true,
      shadowMapSize: 512,
      antialias: true,
      lightComplexity: 'medium',
      isMobile,
    };
  }

  return {
    tier: 'high',
    dpr: Math.min(rawDpr, 1.5),
    shadows: true,
    shadowMapSize: 1024,
    antialias: true,
    lightComplexity: 'full',
    isMobile,
  };
}

let cachedSettings: QualitySettings | null = null;

export function getQualitySettings(): QualitySettings {
  if (!cachedSettings) {
    cachedSettings = detectDeviceQuality();
  }
  return cachedSettings;
}
