import React, { useCallback } from "react";
import { twMerge } from "tailwind-merge";

export interface ThemeToggleProps extends React.ComponentProps<"button"> {}

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-moon"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-sun"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const getThemeBySystemPreference = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  } else {
    return "light";
  }
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  ...props
}) => {
  const [theme, setTheme] = React.useState(getThemeBySystemPreference());

  const toggle = React.useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.theme = newTheme;
    setTheme(newTheme);
  }, [theme]);

  const Icon = React.useMemo(() => {
    return theme === "light" ? MoonIcon : SunIcon;
  }, [theme]);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className={twMerge(
        "flex justify-center align-center text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-white block",
        className
      )}
      onClick={toggle}
      title="Alterar Tema"
      {...props}
    >
      <Icon />
    </button>
  );
};
