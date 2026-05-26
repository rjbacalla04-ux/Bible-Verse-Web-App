// src/pages/About.jsx
export default function About() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center bg-[#faf9f6] dark:bg-zinc-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 animate-fade-in">
      
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        {/* 1. MALIIT NA KATEGORYA / SUBTITLE */}
        <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#8b6d31] dark:text-[#a68b55] uppercase animate-in fade-in slide-in-from-bottom-3 duration-500">
          The Meaning of Pause
        </p>

        {/* 2. MALAKING PAMAGAT (Serif Font base sa Home Page) */}
        <h1 className="mb-8 text-5xl font-serif tracking-tight text-[#1a1a1a] dark:text-gray-100 md:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          Find Your Selah.
        </h1>

        {/* 3. VERSE O INSPIRASYON (Naka-Italicized at Serif din) */}
        <blockquote className="mb-6 max-w-2xl text-lg italic leading-relaxed text-gray-600 dark:text-gray-300 font-serif md:text-[22px]">
          "Selah is a Hebrew word frequently found in the Psalms. It is an invitation to pause, to weigh the words, and to let the heart rest in the presence of God."
        </blockquote>
        
        {/* 4. DIVIDER (Kopya sa divider ng Home Page mo para consistent) */}
        <div className="w-full max-w-md my-10 border-t border-gray-200/60 dark:border-zinc-800 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#faf9f6] dark:bg-zinc-900 px-3">
            <span className="text-gray-300 dark:text-zinc-600 text-xs tracking-widest">• • •</span>
          </div>
        </div>

        {/* 5. MGA DAGDAG NA DETALYE (Ang Core Features o Nilalaman ng App) */}
        <div className="w-full max-w-2xl text-left space-y-8 px-4 md:px-0">
          
          <div className="border-l-2 border-[#8b6d31]/40 dark:border-[#a68b55]/40 pl-6">
            <h3 className="text-md font-bold tracking-wider text-[#8b6d31] dark:text-[#a68b55] font-sans uppercase mb-1">
              Digital Sanctuary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              In a world filled with constant notifications and noise, this app is built to be a quiet space. We strip away the clutter so you can focus entirely on reflection and anchoring your soul in the Word.
            </p>
          </div>

          <div className="border-l-2 border-[#8b6d31]/40 dark:border-[#a68b55]/40 pl-6">
            <h3 className="text-md font-bold tracking-wider text-[#8b6d31] dark:text-[#a68b55] font-sans uppercase mb-1">
              Personalized Reflections
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Every search is not just a query, but a moment of seeking comfort. Whether you are searching for strength, peace, or guidance, Selah helps bring the right verses to light for your current season.
            </p>
          </div>

          <div className="border-l-2 border-[#8b6d31]/40 dark:border-[#a68b55]/40 pl-6">
            <h3 className="text-md font-bold tracking-wider text-[#8b6d31] dark:text-[#a68b55] font-sans uppercase mb-1">
              The Daily Seed
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Every day, a single verse is provided to serve as a seed for meditation. Let it grow in your heart as you go through your quiet moments and busy routines alike.
            </p>
          </div>

        </div>

        {/* 6. FOOTER DETAILS (Hango sa dulong slide para sa contact at professional touch) */}
        <div className="mt-16 text-center">
          <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-zinc-500 uppercase">
            Walk this path of reflection with us.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs font-mono text-gray-500 dark:text-zinc-400">
            <span>v1.0.0</span>
            <span className="hidden sm:inline text-gray-300 dark:text-zinc-700">|</span>
            <span className="hover:text-[#8b6d31] dark:hover:text-[#a68b55] transition-colors cursor-pointer">pause@selah-app.com</span>
          </div>
        </div>

      </div>

    </section>
  );
}