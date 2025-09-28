class ShellCommandComponent extends HTMLElement {
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
            <strong>~</strong
            <form action="" method="">
                <input type="text">
            </form>
        </div>
        `;
      return template.content.cloneNode(true);
    }
}

window.customElements.define('shell-command', ShellCommandComponent);