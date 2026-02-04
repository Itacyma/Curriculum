const STORAGE_KEY = 'cv_language';

function normalizeLanguage(value) {
  if (!value) return null;
  const normalized = String(value).trim().toLowerCase();
  if (normalized.startsWith('it')) return 'it';
  if (normalized.startsWith('en')) return 'en';
  return null;
}

export function getInitialLanguage() {
  try {
    const stored = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    if (stored) return stored;
  } catch {
    // ignore (privacy mode / blocked storage)
  }

  const navLanguages = (typeof navigator !== 'undefined' && navigator.languages) ? navigator.languages : [];
  for (const candidate of navLanguages) {
    const normalized = normalizeLanguage(candidate);
    if (normalized) return normalized;
  }

  const navLanguage = (typeof navigator !== 'undefined') ? navigator.language : null;
  return normalizeLanguage(navLanguage) ?? 'en';
}

export function persistLanguage(language) {
  const normalized = normalizeLanguage(language);
  if (!normalized) return;
  try {
    localStorage.setItem(STORAGE_KEY, normalized);
  } catch {
    // ignore
  }
}

export function applyDocumentLanguage(language) {
  const normalized = normalizeLanguage(language);
  if (!normalized || typeof document === 'undefined') return;

  document.documentElement.lang = normalized;
  document.documentElement.dir = 'ltr';
}
