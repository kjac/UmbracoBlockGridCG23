import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridImage extends LitElement {
    static properties = {
        src: {},
    };

    static styles = css`
img {
	object-fit: cover;
	width: 100%;
	height: calc(30vh * var(--umb-block-grid--item-row-span));

	cursor: pointer;
}
`;

    constructor() {
        super();
    }

    render() {
        return html`<img src="${this.src}?width=500"></img>`;
    }
}

customElements.define('grid-image', GridImage);
