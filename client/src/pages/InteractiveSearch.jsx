import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CircuitBackground } from '../components/CircuitBackground';
import { SearchBar } from '../components/SearchBar';
import { SearchResultCard } from '../components/SearchResultCard';
import { searchItems } from '../data/searchableItems.mjs';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import '../style/InteractiveSearch.css';

function InteractiveSearchPage({ language, setLanguage }) {
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (!query) {
      setResults([]);
      setHasSearched(false);
      setCurrentQuery('');
      return;
    }
    setCurrentQuery(query);
    const found = searchItems(query);
    setResults(found);
    setHasSearched(true);
  };

  const labels = {
    backButton: { it: 'Torna al curriculum', en: 'Back to curriculum' },
    title: { it: 'Esplora le mie competenze', en: 'Explore my skills' },
    subtitle: {
      it: 'Cerca una tecnologia o un argomento per trovare esami e progetti correlati',
      en: 'Search a technology or topic to find related exams and projects'
    },
    noResults: { it: 'Nessun risultato trovato per', en: 'No results found for' },
    resultsCount: {
      it: (n, q) => `${n} risultat${n === 1 ? 'o' : 'i'} per "${q}"`,
      en: (n, q) => `${n} result${n === 1 ? '' : 's'} for "${q}"`
    }
  };

  const l = (key) => labels[key]?.[language] ?? labels[key]?.it;

  return (
    <div className="interactive-search-container">
      <CircuitBackground />

      <div className="interactive-search-content">
        {/* Top bar */}
        <div className="interactive-top-bar">
          <button className="interactive-back-btn" onClick={() => navigate('/')}>
            <i className="bi bi-arrow-left"></i>
            <span>{l('backButton')}</span>
          </button>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        {/* Hero section con foto e search bar */}
        <div className="interactive-hero">
          <div className="interactive-photo-wrapper">
            <img src="/ProfilePhoto.png" alt="Profile" className="interactive-photo" />
            <div className="interactive-photo-overlay"></div>
          </div>
          <h1 className="interactive-title">{l('title')}</h1>
          <p className="interactive-subtitle">{l('subtitle')}</p>
          <SearchBar onSearch={handleSearch} language={language} />
        </div>

        {/* Risultati */}
        <div className="interactive-results-area">
          {hasSearched && results.length === 0 && (
            <div className="interactive-no-results">
              <i className="bi bi-emoji-frown"></i>
              <p>{l('noResults')} "<strong>{currentQuery}</strong>"</p>
            </div>
          )}

          {hasSearched && results.length > 0 && (
            <>
              <div className="interactive-results-count">
                {labels.resultsCount[language](results.length, currentQuery)}
              </div>
              <div className="interactive-results-grid">
                {results.map((item, i) => (
                  <SearchResultCard key={`${item.type}-${item.name.en}-${i}`} item={item} language={language} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { InteractiveSearchPage };
