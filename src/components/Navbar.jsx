import { useState, useEffect } from "react";

const Navbar = () => {
  // 1. Pag-load ng page, titingnan muna sa baul ng browser kung may "dark" theme na naka-save dati
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2. Tuwing pinipindot ang toggle button, automatic na ididikit ang "dark" class sa HTML at isasave sa browser memory
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="relative flex items-center justify-between px-8 py-6 bg-[#faf9f6] dark:bg-zinc-900 border-b border-transparent dark:border-zinc-900 transition-colors duration-300 md:px-[10%]">
      
      <div className="z-10 text-4xl tracking-tight text-[#8b6d31] dark:text-[#a68b55] font-serif">
        Selah
      </div>
      
      <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8 font-medium text-gray-600 dark:text-gray-300">
        <li>
          <a href="#" className="pb-1 text-sm border-b-2 border-[#8b6d31] dark:border-[#a68b55] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-sm transition-colors hover:text-[#8b6d31] dark:hover:text-[#a68b55]">
            About
          </a>
        </li>
      </ul>

      <div className="z-10 flex items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-600 dark:text-gray-300 hover:text-[#8b6d31] dark:hover:text-[#a68b55] transition-colors duration-300 p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 cursor-pointer"
          aria-label="Toggle Theme"
        >
         {darkMode ? (
            // ☀️ SUN ICON (Lilitaw lang kapag naka-Dark Mode ka para pwede mong i-click pabalik sa light)
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            // 🌙 MOON ICON (Sasalubong sa iyo sa simula kapag umaga)
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;