import React from "react";
import { useGlobal } from "../../hooks/GlobalProvider";
import styles from './converterForm.module.css';

export default function ConverterForm() {
    const { language } = useGlobal();

    return (
        <div className={styles.converterForm}>
            <h1>{language === "pt" ?
                "Conversor de Tom para Vídeos do YouTube" : language === "en" ?
                    "YouTube Video Key Converter" :
                    "Convertidor de Tono para Videos de YouTube"}</h1>
            <div className={styles.form}>
                <input></input>
                <button>
                    {language === "pt" ? "Converter" : language === "en" ? "Change" : "Convertir"}
                </button>
            </div>
        </div>
    );
}