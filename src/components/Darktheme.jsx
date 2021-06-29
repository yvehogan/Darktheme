import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import '../styles/darktheme.css';
import DarkModeToggle from "react-dark-mode-toggle";

const Darktheme = () => {
  const [theme, setTheme] = useState('light'); 
  
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
    
    return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      <DarkModeToggle
      className="theme-btn"
      onChange={toggleTheme}
      checked={toggleTheme}
      size={50}
    />
    </>
    </ThemeProvider>
    )
}
export default Darktheme;
