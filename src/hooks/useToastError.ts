import { useCallback, useRef } from "react";

import { toast } from "react-toastify";

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useTranslations } from "./useTranslations";
import { Languages } from "../types/internationalization.types";

type ErrorData = Record<string, Languages>;

export const useToastError = () => {
  const { lang } = useTranslations();
  const errorShownRef = useRef(false);
  const toastError = useCallback(
    (error: FetchBaseQueryError | SerializedError | undefined) => {
      function isErrorData(data: unknown): data is ErrorData {
        if (data) {
          return typeof data === "object" && lang in data;
        }
        return false;
      }
      if (error) {
        if ("status" in error) {
          const data = error.data;
          if (isErrorData(data)) {
            toast.error(data[lang], {
              position: "bottom-right",
            });
          }
        } else {
          toast.error("Unexpected Error", {
            position: "bottom-right",
          });
        }
      }
    },
    [lang]
  );

  return {
    toastError,
    errorShownRef,
  };
};
