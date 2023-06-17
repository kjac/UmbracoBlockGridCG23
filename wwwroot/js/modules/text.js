import {LitElement, html, unsafeHTML} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridText extends LitElement {
    static properties = {
        text: {},
    };

    constructor() {
        super();
    }

    render() {
        return html`${unsafeHTML(this.text)}`;
    }
}

customElements.define('grid-text', GridText);
