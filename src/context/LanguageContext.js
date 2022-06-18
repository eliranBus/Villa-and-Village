import { createContext } from "react";
import { translations } from "../languages/translations.js";

export const LanguageContext = createContext(translations.english);
