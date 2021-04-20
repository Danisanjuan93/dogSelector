import React from "react";
import { TFunction, useTranslation } from "react-i18next";

const TranslationContext = (): React.Context<{ translator: TFunction }> => {
    return React.createContext({
        translator: useTranslation().t
    });
}

export default TranslationContext;