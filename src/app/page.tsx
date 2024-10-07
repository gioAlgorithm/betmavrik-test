'use client'
import { useContext } from "react";
import ExchangeRates from "@/components/ExchangeRates";
import styles from "./page.module.scss";
import { LanguageContext } from "@/context/language.context";

export default function Home() {
  const { text } = useContext(LanguageContext);
  return (
    <div className={styles.page}>
      <h1>{text.title}</h1>
      <ExchangeRates />
    </div>
  );
}
