import { useState } from "react";
import React from 'react'
const themes = {
    light : {
        background: '#ffffff',
        color: '#000000'
    },
    dark : {
        background: '#000000',
        color: '#ffffff'
    }
};

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState(themes.light);
    const [activeTheme, setActiveTheme] = useState('light');
    const toggleTheme = () =>{
    const nextTheme = (activeTheme === 'light') ? 'dark' : 'light';
    setActiveTheme(nextTheme);
    setTheme(themes[nextTheme]);
    }
    return <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
           </ThemeContext.Provider>
    
}
