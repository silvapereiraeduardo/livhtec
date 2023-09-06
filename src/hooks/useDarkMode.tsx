import { useCallback, useEffect, useState } from "react";

const DARK_MODE_CLASS = "dark";
const DARK_MODE_LOCAL_STORAGE_KEY = "dark_mode";

const getDarkModeOnLocalStorage = () => {
  return localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY) === "true";
};

const setDarkModeOnLocalStorage = (darkMode: boolean) => {
  localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, String(darkMode));
};

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(getDarkModeOnLocalStorage());

  const toggleDarkMode = useCallback(() => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
  }, [darkMode]);

  const changeDarkModeOnBody = (darkMode: boolean) => {
    const html = document.querySelector("html");
    html?.classList.remove(DARK_MODE_CLASS);

    if (darkMode) {
      html?.classList.add(DARK_MODE_CLASS);
    }
  };

  useEffect(() => {
    changeDarkModeOnBody(darkMode);
    setDarkModeOnLocalStorage(darkMode);
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
