"use client";
import { useContext } from "react";
import { LanguageContext } from "@/context/language.context";// Adjust the import path as necessary
import styles from "./LanguageSwitcher.module.scss"; // Create a separate SCSS file for styling

const LanguageSwitcher: React.FC = () => {
  const { language, onChangeLanguage } = useContext(LanguageContext);

  return (
    <button
      className={styles.languageButton} // Apply your styles here
      onClick={() => onChangeLanguage(language === "ENG" ? "GEO" : "ENG")}
    >
      {language === "ENG" ? "ENG" : "GEO"}
    </button>
  );
};

export default LanguageSwitcher;