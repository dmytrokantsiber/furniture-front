import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { Languages } from "../types/internationalization.types";
import { translations } from "../utils/internationalization/translations";
import {
  addTrans,
  setLang,
} from "../store/slices/internationalization/internationalization.slice";

interface IUseTranslationsReturn {
  t: typeof translations.en;
  setCurrentLang: (lang: Languages) => void;
  lang: Languages;

  isKeyOf: (key: string) => key is keyof typeof translations.en;
  addTranslate: (trans: Record<string, string>) => void;
}

export const useTranslations = (): IUseTranslationsReturn => {
  const dispatch = useAppDispatch();
  const t = useAppSelector(
    (state) =>
      state.internationalizationReducer.translations[
        state.internationalizationReducer.lang
      ]
  );
  const setCurrentLang = (lang: Languages) => dispatch(setLang(lang));
  const lang = useAppSelector(
    (state) => state.internationalizationReducer.lang
  );

  const isKeyOf = (key: string): key is keyof typeof t => {
    return key in t;
  };

  const addTranslate = (trans: Record<string, string>) =>
    dispatch(addTrans(trans));

  return {
    t,
    isKeyOf,
    setCurrentLang,
    addTranslate,
    lang,
  };
};
