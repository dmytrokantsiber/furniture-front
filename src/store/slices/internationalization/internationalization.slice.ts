import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { translations } from "../../../utils/internationalization/translations";
import { defaultLanguage } from "../../../utils/internationalization/internationalization.config";
import {
  IInternationalizationSliceState,
  Languages,
} from "../../../types/internationalization.types";

const initialState: IInternationalizationSliceState = {
  lang: defaultLanguage,
  translations,
};

export const internationalizationSlice = createSlice({
  name: "internationalization",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
    },
    addTrans: (state, action: PayloadAction<Record<string, string>>) => {
      state.translations = {
        ...state.translations,
        en: {
          ...state.translations.en,
          [action.payload.name]: action.payload.content,
        },
      };
    },
  },
});

export const { setLang, addTrans } = internationalizationSlice.actions;

export default internationalizationSlice.reducer;
