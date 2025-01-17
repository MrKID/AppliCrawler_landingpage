import { type Lang, supportedLangs } from '../i18n/config';

export interface LanguageRoute {
  params: {
    lang: Lang;
  };
}

export function createLanguageRoutes(): LanguageRoute[] {
  return supportedLangs.map(lang => ({
    params: { lang }
  }));
}