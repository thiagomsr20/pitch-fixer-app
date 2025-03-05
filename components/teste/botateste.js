class MeuBotao extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // HTML e CSS dentro de template literals
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background: #6200ea;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background 0.3s;
                }
                button:hover {
                    background: #3700b3;
                }
            </style>
            <button> Clique em mim! </button>
        `;

        // Adicionar evento ao botão
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            alert('Botão clicado!');
        });
    }
}

// Registrar o componente personalizado
customElements.define('meu-botao', MeuBotao);
