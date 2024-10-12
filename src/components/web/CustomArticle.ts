class CustomArticle extends HTMLElement {
  static get observedAttributes() {
    return ["content"];
  }
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = /* css */ `
      pre {
        overflow-x: auto;
      }
      em {
        font-style: normal;
      }
      em > strong {
        color: #c084fc;
      }
    `.replace(/\s/g, "");
    shadow.appendChild(style);
    const article = document.createElement("article");
    article.id = "article";
    shadow.appendChild(article);
  }
  attributeChangedCallback(_name: string, _oldValue: string, newValue: string) {
    const articleEl = this.shadowRoot?.querySelector("#article");
    console.log(articleEl);
    if (articleEl) {
      articleEl.innerHTML = newValue;
    }
  }
}

customElements.define("custom-article", CustomArticle);
