import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "./translations.js";

export default function MultiLingualContent({ contentID }) {
  const { language } = useContext(LanguageContext);

  return translations[language][contentID];
}
