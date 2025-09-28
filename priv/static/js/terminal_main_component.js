class TerminalMainComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.#template());

        this.sheet = new CSSStyleSheet();
        this.sheet.replaceSync(
            `
            div { 
                display: flex;
                flex-direction: row;
                background-color: black;
                border: solid 1px white;
                border-radius: 1rem;
                width: 60vw;
                height: 50vh;
                padding: 0.5vh 1vw 0.5vh 1vw;
            }
            `
            );
        this.shadowRoot.adoptedStyleSheets = [this.sheet];

    }

    #template() {
        const template = document.createElement('template')
        template.innerHTML =
        `
        <div>
            <shell-command></shell-command>
        </div>
        `;
      return template.content.cloneNode(true);
    }
}

window.customElements.define('terminal-main', TerminalMainComponent);
