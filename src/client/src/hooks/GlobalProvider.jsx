import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [language, setLanguage] = useState('pt');
    const [darkMode, setDarkTheme] = useState(false);

    return (
        <GlobalContext.Provider value={{ language, setLanguage, darkMode, setDarkTheme}}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}
