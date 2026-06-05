// src/components/ResultLink.jsx

// 🔥 PANSININ: Tinatanggap na natin ang 'result' na galing sa useSearch -> Home
const ResultLink = ({ result }) => {
  
  // 1. Kung naglo-load pa lang o walang pinasang result ang parent component
  if (!result) return null;

  // 2. Kung nag-search ang user ng verse na wala pa sa ating mock database (e.g. "Genesis 1:1")
  if (result.error) {
    return (
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-12 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm text-center">
        <p className="text-gray-500 dark:text-gray-400 font-serif italic text-lg">
          "{result.error}"
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Subukang i-click ang John 3:16 o Psalm 23:1 sa home screen.
        </p>
      </div>
    );
  }

  // 3. Kung nahanap ang verse, hihilahin natin ang 'reflections' array mula sa backend data
  const { reflections } = result;

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Category Title - May kasama nang pangalan ng verse para alam ng user kung ano ang binabasa niya */}
      <h2 className="w-full max-w-2xl text-[11px] font-bold text-[#8b6d31] dark:text-[#a68b55] uppercase tracking-[0.2em] text-left mb-2 pl-2">
        COMMUNITY REFLECTIONS FOR {result.verse}
      </h2>

      {/* Loop for Cards - Dito natin i-ma-map kung ano lang ang ibinalik ng backend natin */}
      {reflections && reflections.map((reflection, index) => (
        <div 
          key={index} 
          className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-xl border border-gray-200/70 dark:border-zinc-800 shadow-sm text-left transition-all hover:shadow-md"
        >
          {/* Text and Source */}
          <div className="mb-8 space-y-3">
            <span className="block text-sm font-semibold text-[#8b6d31] dark:text-[#a68b55] tracking-tight">
              {reflection.site} {/* Galing sa backend field name na 'site' */}
            </span>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] font-normal">
              {reflection.text} {/* Galing sa backend field name na 'text' */}
            </p> 
          </div>

          {/* Read Button - 🔥 GINAWA NATING TOTOONG LINK GAMIT ANG <a> TAG */}
          <div>
            <a 
              href={reflection.url} // Ang totoong link mula sa backend database mo
              target="_blank"       // Para magbukas sa bagong tab at hindi lumayas sa site mo ang user
              rel="noopener noreferrer" // Security standard kapag gumagamit ng target="_blank"
              className="inline-block px-6 py-2.5 text-[10px] font-bold text-[#8b6d31] dark:text-[#a68b55] uppercase tracking-[0.15em] border border-[#8b6d31]/50 dark:border-[#a68b55]/50 rounded-full bg-transparent hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-colors cursor-pointer text-center no-underline"
            >
              READ REFLECTION
            </a>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ResultLink;