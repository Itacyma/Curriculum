import React from 'react';
import '../style/LanguageSwitcher.css';
import ReactCountryFlag from "react-country-flag";

function LanguageSwitcher(props) {
  const { language, setLanguage } = props;
  return (
    <div className="language-switcher">
    <button
        className={language === 'it' ? 'active' : ''}
        onClick={() => setLanguage('it')}
        aria-label="Italiano"
    >
        <ReactCountryFlag
            countryCode="IT"
            svg
        />
    </button>

    <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
        aria-label="English"
    >
        <ReactCountryFlag
            countryCode="GB"
            svg
        />
    </button>

    </div>
  );
}

export { LanguageSwitcher };
