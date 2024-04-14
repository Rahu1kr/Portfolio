import React, { createContext, useState, useContext } from 'react';

// Define a theme context
const ThemeContext = createContext();

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const theme = {
    mode: darkMode ? 'dark' : 'light',
    colors: {
      blue: darkMode ? '#122035' : '#60a3da',
      sky: darkMode ? '#274472' : '#bfd7ed',
      maintext: darkMode ? '#E3E2E6' : '#1A1C1E',
      normaltext: darkMode ? '#BFC3D0' : '#2E3337',
      button: darkMode ? '#122035' : '#60a3da',
      hover: darkMode ? '#546A8E' : '#BFD7ED',
      border: darkMode ? '#405a85' : '#566883',
    },
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
