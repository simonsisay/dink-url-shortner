import { useState } from "react";

export const ThemeContext = React.createContext("light");

const AppTheme = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const switchTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default AppTheme;
