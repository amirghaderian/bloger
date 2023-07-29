import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<Boolean | undefined>(undefined);
  const SwitchMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    console.log("darkMode:" ,darkMode)
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === "false") {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <div className="bg-red-300 cursor-pointer " onClick={SwitchMode}>
     {!darkMode ? "Darkmode" :"LightMode"}
    </div>
  );
};

export default DarkMode;
