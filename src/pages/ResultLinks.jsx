// src/components/ResultLink.jsx

const reflectionResults = [
  {
    id: 1,
    source: "Bible Gateway",
    text: "Exploring the linguistic roots of 'agape' love and how this verse redefined the ancient world's understanding of God's character.",
  },
  {
    id: 2,
    source: "Desiring God",
    text: "John Piper reflects on the 'whosoever'—the boundless reach of God's grace and the simplicity of belief in the face of eternity.",
  },
  {
    id: 3,
    source: "The Gospel Coalition",
    text: "A theological deep-dive into the concept of 'perishing' and why the promise of 'everlasting life' remains the most hopeful phrase in literature.",
  },
];

const ResultLink = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Category Title */}
      <h2 className="w-full max-w-2xl text-[11px] font-bold text-[#8b6d31] dark:text-[#a68b55] uppercase tracking-[0.2em] text-left mb-2 pl-2">
        COMMUNITY REFLECTIONS
      </h2>

      {/* Loop for Cards */}
      {reflectionResults.map((reflection) => (
        <div 
          key={reflection.id} 
          className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-xl border border-gray-200/70 dark:border-zinc-800 shadow-sm text-left transition-all hover:shadow-md"
        >
          {/* Text and Source */}
          <div className="mb-8 space-y-3">
            <span className="block text-sm font-semibold text-[#8b6d31] dark:text-[#a68b55] tracking-tight">
              {reflection.source}
            </span>
            {/* FIXED HERE: Ginawa nang </p> ang closing tag */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] font-normal">
              {reflection.text}
            </p> 
          </div>

          {/* Read Button */}
          <div>
            <button className="px-6 py-2.5 text-[10px] font-bold text-[#8b6d31] dark:text-[#a68b55] uppercase tracking-[0.15em] border border-[#8b6d31]/50 dark:border-[#a68b55]/50 rounded-full bg-transparent hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-colors cursor-pointer">
              READ REFLECTION
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ResultLink;