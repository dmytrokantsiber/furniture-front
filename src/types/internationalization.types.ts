import { translations } from "../utils/internationalization/translations";

export type Languages = "en" | "ua";

export type Translations = Record<string, typeof translations.en>;

export interface IInternationalizationSliceState {
  lang: Languages;
  translations: Translations;
}
