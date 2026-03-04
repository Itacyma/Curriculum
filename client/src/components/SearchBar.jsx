import { useState, useRef, useEffect } from 'react';
import { suggestKeywords } from '../data/searchableItems.mjs';
import '../style/SearchBar.css';

function SearchBar({ onSearch, language }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const skipNextEffect = useRef(false);

  const placeholder = language === 'it'
    ? 'Cerca una tecnologia (es. "React", "Rust", "DevOps"...)'
    : 'Search a technology (e.g. "React", "Rust", "DevOps"...)';

  useEffect(() => {
    if (skipNextEffect.current) {
      skipNextEffect.current = false;
      return;
    }
    if (input.trim().length > 0) {
      const results = suggestKeywords(input);
      setSuggestions(results);
      setShowSuggestions(results.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setActiveSuggestion(-1);
  }, [input]);

  // Chiudi suggerimenti cliccando fuori
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        suggestionsRef.current && !suggestionsRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (value) => {
    const query = (value ?? input).trim();
    if (query) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        const selected = suggestions[activeSuggestion];
        skipNextEffect.current = true;
        setInput(selected);
        setSuggestions([]);
        setShowSuggestions(false);
        handleSubmit(selected);
      } else {
        handleSubmit();
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    skipNextEffect.current = true;
    setInput(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    handleSubmit(suggestion);
    inputRef.current?.focus();
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <i className="bi bi-search search-bar-icon"></i>
        <input
          ref={inputRef}
          type="text"
          className="search-bar-input"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
          autoComplete="off"
          spellCheck={false}
        />
        {input && (
          <button
            className="search-bar-clear"
            onClick={() => { setInput(''); onSearch(''); inputRef.current?.focus(); }}
            aria-label="Clear"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
        <button
          className="search-bar-submit"
          onClick={() => handleSubmit()}
          aria-label="Search"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      {showSuggestions && (
        <ul className="search-bar-suggestions" ref={suggestionsRef}>
          {suggestions.map((s, i) => (
            <li
              key={s}
              className={`search-bar-suggestion${i === activeSuggestion ? ' active' : ''}`}
              onMouseDown={() => handleSuggestionClick(s)}
              onMouseEnter={() => setActiveSuggestion(i)}
            >
              <i className="bi bi-tag suggestion-icon"></i>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchBar };
