import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridSection extends LitElement {
    static properties = {
        backgroundColor: {attribute: 'background-color'},
        textContrast: {attribute: 'text-contrast'}
    };

    static styles = css`
section {
	padding: 10px 0;
}
.areas {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

}
.inverted {
    color: white;
}
`;

    constructor() {
        super();
    }

    render() {
        return html`
            <section style="background-color:#${this.backgroundColor}"
                     class="${this.textContrast === 'inverted' ? 'inverted' : ''}">
                <div class="areas">
                    <slot></slot>
                </div>
            </section>
        `;
    }
}

customElements.define('grid-section', GridSection);
