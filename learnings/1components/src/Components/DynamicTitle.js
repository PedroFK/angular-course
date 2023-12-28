class DynamicTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute('text')
        //component base

        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;  
        //component style

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
        //send to shadow

    }
}

customElements.define('dynamic-title', DynamicTitle);