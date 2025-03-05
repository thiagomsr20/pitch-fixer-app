import React from "react";
import { useGlobal } from "../hooks/GlobalProvider";

export default function ConverterForm() {
    const { language } = useGlobal();

    return (
        <button>
            {language === "pt" ? "Processar" : language === "en" ? "Go" : "Procesar"}
        </button>
    );
}