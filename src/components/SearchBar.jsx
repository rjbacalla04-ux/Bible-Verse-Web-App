import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Pipigilan nito ang pag-refresh ng page
    if (input.trim()) {
      onSearch(input); // Ipapadala ang text sa performSearch hook sa Home.jsx
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-2xl"
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full py-4 pl-12 pr-4 text-gray-700 bg-white dark:bg-zinc-800 dark:text-gray-100 border-none rounded-sm shadow-sm focus:ring-1 focus:ring-gray-200 dark:focus:ring-zinc-700 placeholder:italic placeholder:text-gray-300 dark:placeholder:text-zinc-600 transition-colors"
        placeholder="Search for a verse (e.g., John 3:16)"
      />
      {/* Optional: Pwedeng pindutin ang Enter or magdagdag ng hidden button para sa form submit */}
      <button type="submit" className="hidden">Search</button>
    </form>
  );
};

export default SearchBar;