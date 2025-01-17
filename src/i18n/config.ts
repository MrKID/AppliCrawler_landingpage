export const defaultLang = 'zh';
export const supportedLangs = ['zh', 'en'] as const;
export type Lang = typeof supportedLangs[number];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && supportedLangs.includes(lang as Lang)) {
    return lang as Lang;
  }
  return defaultLang;
}