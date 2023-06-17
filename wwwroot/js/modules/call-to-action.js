import {LitElement, html, css, unsafeHTML} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridCallToAction extends LitElement {
    static properties = {
        label: {},
        link: {}
    };

    static styles = css`
.cta {
	background-color: #3544b1;
	border: 1px solid white;
    display: inline-block;
    padding: 14px 28px;
	color: white;
	margin: 5px;
    margin-right: auto;

	cursor: pointer;
}

.cta a {
	color: white;
}
`;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="cta">
                <a href="${this.link}">${this.label}</a>
            </div>
        `;
    }
}

customElements.define('grid-call-to-action', GridCallToAction);
