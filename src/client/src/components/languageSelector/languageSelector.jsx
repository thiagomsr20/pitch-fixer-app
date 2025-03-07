import { React, useState } from "react";
import { useGlobal } from "../../hooks/GlobalProvider";
import styles from './languageSelector.module.css';

export default function LanguageSelector() {
    const { language, setLanguage } = useGlobal();

    const [isOpen, setComboBoxOpen] = useState(false);

    const handleComboBox = () => {
        setComboBoxOpen(!isOpen);
    }

    const handleLanguage = (value) => {
        setLanguage(value);
        setComboBoxOpen(false);
    }

    return (
        <div className={styles.languageSelector}>
            <div
                className={styles.select}
                onClick={handleComboBox}>
                <span className={styles.selectSelectedLenguage}>{language === 'pt' ? 'Português' : (language === 'en' ? 'English' : 'Español')}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className={styles.options}>
                    <div onClick={() => handleLanguage('pt')}>Português</div>
                    <div onClick={() => handleLanguage('en')}>English</div>
                    <div onClick={() => handleLanguage('es')}>Español</div>
                </div>
            )}
        </div>
    );
}