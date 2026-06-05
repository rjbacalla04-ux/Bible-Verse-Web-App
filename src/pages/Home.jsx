import SearchBar from "../components/SearchBar";
import LoadingView from "./LoadingView";
import { useSearch } from "../hooks/useSearch";
import ResultLink from "./ResultLinks";
import { useState, useEffect } from 'react';

export default function Home({ onSelectVerse }) {

  const [sampleVerses, setSampleVerses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/verses')
      .then((res) => res.json())
      .then((data) => setSampleVerses(data))
      .catch((err) => console.error("Hindi makakonekta sa backend:", err));
  }, []);

  // 🔥 UPDATED: Kinuha na rin natin si searchResult mula sa useSearch hook mo
  const { isLoading, showResults, query, searchResult, performSearch, resetSearch } = useSearch();

  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 text-center bg-[#faf9f6] dark:bg-zinc-900 transition-colors duration-300 animate-fade-in min-h-screen">
      
      {/* 1. DEFAULT STATE (Header & Search Bar) */}
      {!isLoading && !showResults && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-700">
          <h1 className="mb-4 text-5xl font-serif text-[#1a1a1a] dark:text-gray-100 tracking-tight md:text-6xl">
            Be still and know.
          </h1>
          <p className="mb-10 text-lg text-gray-600 dark:text-gray-400">
            Find a moment of quiet reflection in the Word.
          </p>

          <SearchBar onSearch={performSearch} />

          {/* Quick Search Suggestions */}
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-3">
              {sampleVerses.map((item) => (
                <button
                  key={item.id}
                  onClick={() => performSearch(item.verse)}
                  className="px-5 py-2 text-sm text-gray-600 dark:text-gray-300 bg-[#f1f0ee] dark:bg-zinc-800 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                  {item.verse}
                </button>
              ))}
            </div>
          </div>

          {/* Divider & Today's Seed */}
          <div className="w-full max-w-4xl mt-20 mb-12 border-t border-gray-200/60 dark:border-zinc-800 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#faf9f6] dark:bg-zinc-900 px-4">
              <div className="p-3 border border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
                <svg className="w-6 h-6 text-gray-300 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-md shadow-sm p-12 border border-gray-50 dark:border-zinc-800">
            <h2 className="mb-8 text-xs font-bold tracking-[0.2em] text-[#8b6d31] dark:text-[#a68b55] uppercase">Today's Seed</h2>
            <blockquote className="mb-6 text-1xl italic leading-relaxed text-gray-700 dark:text-gray-200 font-serif md:text-[20px]">
              "Come to me, all you who are weary and burdened, and I will give you rest."
            </blockquote>
            <cite className="block mb-10 text-sm not-italic text-gray-500 dark:text-gray-400 font-medium">— Matthew 11:28</cite>
          </div>
        </div>
      )}

      {/* 2. LOADING STATE */}
      {isLoading && (
        <div className="w-full flex justify-center items-center min-h-[60vh]">
          <LoadingView />
        </div>
      )}

      {/* 3. RESULTS STATE */}
      {showResults && !isLoading && (
        <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center">
          {/* 🔥 FIXED: Ipinasa natin ang searchResult data dito sa ResultLink */}
          <ResultLink result={searchResult} />
          
          <button 
            onClick={resetSearch} 
            className="relative z-10 mt-12 text-xs font-bold tracking-widest text-gray-400 hover:text-amber-700 uppercase transition-colors cursor-pointer"
          >
            Search Another Verse
          </button>
        </div>
      )}

    </section>
  );
}