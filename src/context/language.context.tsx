'use client';
import { createContext, useState } from 'react';
import languages from '../data/languages';

type LanguageKeys = keyof typeof languages;

interface Context {
  language: LanguageKeys;
  text: (typeof languages)[LanguageKeys];
  onChangeLanguage: (language: LanguageKeys) => void;
}

const initial: Context = {
  language: 'GEO',
  text: languages['GEO'],
  onChangeLanguage: () => {},
};

export const LanguageContext = createContext(initial);

export function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize language state with a default value, e.g., 'GEO'
  const [language, setLanguage] = useState<LanguageKeys>('GEO');

  // Get the corresponding text for the selected language
  const text = languages[language];

  // Update the language when called
  const onChangeLanguage: Context['onChangeLanguage'] = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, text, onChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
