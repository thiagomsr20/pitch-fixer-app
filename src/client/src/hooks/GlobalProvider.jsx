import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [language, setLanguage] = useState('pt');
    const [darkMode, setDarkTheme] = useState(false);

    useEffect(() => {
        // Detecta idioma do navegador
        const userLang = navigator.language || navigator.userLanguage;
        setLanguage(userLang.startsWith('pt') ? 'pt' : 'en');

        // Detecta preferência de tema do sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkTheme(prefersDark);
    }, []);

    return (
        <GlobalContext.Provider value={{ language, setLanguage, darkMode, setDarkTheme }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}
