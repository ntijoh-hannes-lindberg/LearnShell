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
        <style>
            input {
                border: 2px solid black;
                background-color: black;
                outline: none;   
                color: white;
                width: 60vh;
            }   
            
            strong {
                color: rgba(40, 184, 219); 
            }
             
        </style>
        `;
      return template.content.cloneNode(true);
    }
}

window.customElements.define('shell-command', ShellCommandComponent);