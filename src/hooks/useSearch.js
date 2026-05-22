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

    // Simulation ng loading (HINDI natin ginalaw ito para buhay ang LoadingView)
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };

  // 🔥 ADDED THIS: Ang function na magbabalik sa atin sa Home screen nang walang refresh
  const resetSearch = () => {
    setQuery("");          // I-clear ang huling hinanap
    setIsLoading(false);   // Siguraduhing patay ang loading
    setShowResults(false); // Itago ang Results screen para lumitaw ang Home page
  };

  // ⚠️ ADDED 'resetSearch' HERE: Kasama na siya sa mga rine-return ng hook mo ngayon
  return { isLoading, showResults, query, performSearch, resetSearch };
};