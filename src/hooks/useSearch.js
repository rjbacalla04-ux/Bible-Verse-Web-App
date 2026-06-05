// src/hooks/useSearch.js
import { useState } from 'react';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");
  // 🔥 ADDED: Dito natin itatabi ang data at trusted links na galing sa backend
  const [searchResult, setSearchResult] = useState(null);

  const performSearch = async (searchTerm) => {
    if (!searchTerm) return;
    
    setQuery(searchTerm);
    setIsLoading(true);
    setShowResults(false);

    // Gawin nating lowercase at palitan ang spaces ng gitling para bumagay sa Backend IDs mo
    // Halimbawa: "John 3:16" -> "john-3-16"
    const formattedId = searchTerm.toLowerCase().trim().replace(/[\s:]+/g, '-');

    try {
      // 🔥 TO-DO FETCH: Tinatawagan na natin ang Endpoint 2 ng backend mo!
      const response = await fetch(`http://localhost:5000/api/verses/${formattedId}`);
      const data = await response.json();

      if (response.ok) {
        setSearchResult(data); // Itatabi ang verse text at reflections array
      } else {
        setSearchResult({ error: "Verse not found in trusted database." });
      }
    } catch (err) {
      console.error("Error connecting to backend:", err);
      setSearchResult({ error: "Cannot connect to server." });
    } finally {
      // Patayin ang LoadingView at ipakita ang Results screen matapos ang fetch
      setIsLoading(false);
      setShowResults(true);
    }
  };

  const resetSearch = () => {
    setQuery("");
    setSearchResult(null); // I-reset din ang resulta
    setIsLoading(false);
    setShowResults(false);
  };

  // ⚠️ ISINAMA NATIN si 'searchResult' sa mga ibinabalik ng hook
  return { isLoading, showResults, query, searchResult, performSearch, resetSearch };
};