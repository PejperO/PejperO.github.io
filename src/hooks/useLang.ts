import { useStatic } from "react";
import langData from "../../public/langs.json" assert { type: "json" };

type LangData = typeof langData;
type LanguageCode = keyof LangData;
type Translation = LangData[LanguageCode];

const supportedLanguages = Object.keys(langData) as LanguageCode[];

export const useLang = () => {
    const [lang, setLang] = useStatic("lang", supportedLanguages[0]);
    const nextLang = supportedLanguages[supportedLanguages.indexOf(lang) + 1] || supportedLanguages[0];

    type TranslationKeys = keyof Translation;

    type TranslationValue<K extends TranslationKeys> = Translation[K];
    function translate<K extends TranslationKeys>(key: K): TranslationValue<K> {
        return langData[lang as LanguageCode][key] ?? langData["en"][key];
    }
    const getFlag = () => {
        return (langData[lang as LanguageCode]["flag"] || langData["en"]["flag"]);
    };

    return { lang, setLang, nextLang, translate, getFlag };
};
