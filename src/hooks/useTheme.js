// src/hooks/useTheme.js
import { useState, useEffect } from "react";

export default function useTheme() {
  // FIXED LOGIC: Default natin ay FALSE (Light Mode) kung wala pang sine-save ang user
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // Magiging true lang ito KUNG pinindot mo talaga ang button dati
  });

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

  return { darkMode, setDarkMode };
}