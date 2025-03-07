import React from "react";
import styles from "./header.module.css";
import LanguageSelector from './../languageSelector/languageSelector';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>iTone<span className={styles.highlight}>Fixer</span></h1>
                <LanguageSelector />
            </div>
        </div>
    );
}
