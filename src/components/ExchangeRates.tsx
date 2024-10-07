"use client";
import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "@/context/language.context";
import fetchExchangeRates from "@/services/fetchCurrency";
import styles from "./ExchangeRates.module.scss"; // Adjust your path if necessary
import Image from "next/image";

const ExchangeRates: React.FC = () => {
  const { text } = useContext(LanguageContext);
  const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getExchangeRates = async () => {
      setLoading(true);
      try {
        const fetchedRates = await fetchExchangeRates();
        setRates(fetchedRates);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch exchange rates");
      } finally {
        setLoading(false);
      }
    };

    getExchangeRates();
  }, []);

  if (loading) return <p>Loading exchange rates...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.exchangeRates}>
      <h2>{text.text}</h2>
      <ul>
        {rates &&
          Object.entries(rates).map(([currency, rate]) => (
            <li key={currency} className={styles.rateItem}>
              <div className={styles.currencyContainer}>
                <Image
                  src={`/icon/${currency}.png`} 
                  alt={`${currency} icon`}
                  width={32}
                  height={32}
                />
                {currency.toUpperCase()}
              </div>
              <div className={styles.equalSignContainer}>=</div>
              <div className={styles.valueContainer}>
                <span className={styles.value}>
                  {Number(rate).toFixed(2)} EUR
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;