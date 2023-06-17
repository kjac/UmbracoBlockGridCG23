import {LitElement, html, css, unsafeHTML} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridCard extends LitElement {
    static properties = {
        imageSrc: {attribute: 'image-src'},
        headline: {},
        text: {},
        columnSpan: {attribute: 'column-span', type: Number},
    };

    static styles = css`
.card {
    background-color: #f9f7f4;
	height: 100%;
	min-height: 30vh;
	margin: 0 5px;

	cursor: pointer;
}
.card img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}
.card .card-content {
	padding: 10px;
	color: black;
}
.card h4 {
	margin: 0;
	margin-bottom: 10px;
}
.card p {
	margin: 0;
}

.card.--medium {
	position: relative;
}
.card.--medium img {
    position: absolute;
    height: 100%;
}
.card.--medium::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,.1);
    pointer-events: none;
}
.card.--medium .card-content {
	position: absolute;
    bottom: 0;
    color: white;
	z-index: 1;
}
`;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="card ${this.columnSpan === 6 ? '--medium' : ''}">
                <img src="${this.imageSrc}?width=500"/>
                <div class="card-content">
                    <h4>${this.headline}</h4>
                    <div>${unsafeHTML(this.text)}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('grid-card', GridCard);
