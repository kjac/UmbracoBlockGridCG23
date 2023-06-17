import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class GridHero extends LitElement {
    static properties = {
        backgroundImage: {attribute: 'background-image'}, headline: {}
    };

    static styles = css`
.hero {
	object-fit: cover;
	width: 100%;
	height: calc(30vh * var(--umb-block-grid--item-row-span));
    height: 50vh;
    width:100%;

	cursor: pointer;
	--umb-block-grid--text-color: #fff;
	--umb-block-grid--text-color-hover: #9fbfff;
}
.hero-background {
	position: absolute;
    inset: 0;
    background-position: 50% 50%;
    background-size: cover;
}
.hero-background::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,.1);
    pointer-events: none;
}
.hero .hero-content {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
.hero .hero-content {
    color: white;
}
.hero .hero-content > h1 {
    font-size: 50px;
    font-weight: 300;
    line-height: 1;
    margin:0;
    margin-bottom: 20px;
    padding: 120px 0 20px 0;
}
`;

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="hero">
                <div
                        class="hero-background"
                        style="background-image:url(${this.backgroundImage}?width=500)">
                </div>
                <div class="hero-content">
                    <h1>${this.headline}</h1>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('grid-hero', GridHero);
