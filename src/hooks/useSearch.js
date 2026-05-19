// src/hooks/useSearch.js
import { useState } from 'react';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");

  const performSearch = (searchTerm) => {
    if (!searchTerm) return;
    
    setQuery(searchTerm);
    setIsLoading(true);
    setShowResults(false);

    // Simulation ng loading
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return { isLoading, showResults, query, performSearch };
};