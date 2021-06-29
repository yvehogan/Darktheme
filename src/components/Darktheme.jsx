import React,{ useState } from 'react';
import '../styles/darktheme.css';

const Darktheme = () => {
    const [darkMode, setDarkMode] = useState(); 
    
    return (
        <div className={darkMode? 'dark-mode': 'light-mode'}>
        <div className="change-theme">
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>click to change theme </button>
          <h1>hello</h1>
        </div>
        </div>
    )
}
export default Darktheme;
