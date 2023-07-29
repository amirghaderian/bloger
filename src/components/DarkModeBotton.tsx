import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("darkMode") === "true");

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    applyDarkMode(newDarkMode);
  };

  const applyDarkMode = (isDarkMode: boolean) => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark-mode");
    } else {
      rootElement.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);

  return (
    <button
      className={`dark-mode-button ${darkMode ? "dark-mode" : "light-mode"}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
    </button>
  );
};

export default DarkModeButton;
