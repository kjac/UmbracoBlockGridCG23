import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridHeadline extends LitElement {
    static properties = {
        headline: {},
    };

    constructor() {
        super();
    }

    static styles = css`
    `;

    render() {
        return html`<h2>${this.headline}</h2>`;
    }
}

customElements.define('grid-headline', GridHeadline);
