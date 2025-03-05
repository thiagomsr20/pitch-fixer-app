import React from "react";
import { useGlobal } from "../hooks/GlobalProvider";
import styles from "./header.module.css";

export default function Header() {
    const { language, setLanguage, darkMode, setDarkTheme } = useGlobal();

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>iTone<span className={styles.highlight}>Fixer</span></h1>

                <div className={styles.selectContainer}>
                    <select
                        className={styles.select}
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}>

                        <option  className={styles.option} value="pt">Português</option>
                        <option  className={styles.option} value="en">English</option>
                        <option  className={styles.option} value="es">Español</option>
                        <option  className={styles.option} value="e">e</option>

                    </select>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
        </div>
    );
}
