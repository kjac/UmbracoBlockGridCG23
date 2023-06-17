function loadModule(source) {
    console.debug("Loading module:", source)
    const script = document.createElement("script");
    script.setAttribute("type", "module");
    script.setAttribute("src", source);
    document.head.appendChild(script);
}

loadModule('/js/modules/headline.js');
loadModule('/js/modules/text.js');
loadModule('/js/modules/quote.js');
loadModule('/js/modules/image.js');
loadModule('/js/modules/hero.js');
loadModule('/js/modules/section.js');
loadModule('/js/modules/card.js');
loadModule('/js/modules/call-to-action.js');
