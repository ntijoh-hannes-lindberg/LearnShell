class TerminalMainComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.#template());
        

    }

    #template() {
        const template = document.createElement('template')
        template.innerHTML =
        `
        <div>
            <strong>~</strong>
            <p>Enter code...</p>
        </div>
        `;
      return template.content.cloneNode(true);
    }
}

window.customElements.define('terminal-main', TerminalMainComponent);
