import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridQuote extends LitElement {
    static properties = {
        text: {},
    };

    static styles = css`
blockquote {
    font-size: 21px;
    letter-spacing: -.02rem;
    margin: 1.5rem 0;
    padding: 0 3rem;
    font-style: italic;
	font-weight: 200;

	cursor: pointer;
}
blockquote:before {
	color: #fad634;
    content: '“';
    font-size: 3em;
    line-height: 0.0em;
    margin-right: 0.01em;
    vertical-align: -0.3em;
}
`;

    constructor() {
        super();
    }

    render() {
        return html`
            <blockquote>${this.text}</blockquote>`;
    }
}

customElements.define('grid-quote', GridQuote);
