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
    const originStyleContent = /* css */ `
      pre {
        overflow-x: auto;
      }
      em {
        font-style: normal;
      }
      em > strong {
        color: #c084fc;
      }
      table {
        border-collapse: collapse;
      }
      th, td {
        border: 1px, solid, #1c1c1c;
      }
      @media (prefers-color-scheme: dark) {
        th, td {
          border-color: #f5f5f5;
        }
      }
    `;
    const compressedStyleContent = originStyleContent
      .replace(/\s+/g, " ")
      .replace(/^\s+|\s+$/g, "")
      .replace(/;\s*}/g, "}")
      .replace(/:\s+/g, ":")
      .replace(/\s*{\s*/g, "{")
      .replace(/\s*}\s*/g, "}")
      .replace(/\s*,\s*/g, ",");
    style.textContent = compressedStyleContent;

    shadow.appendChild(style);
    const article = document.createElement("article");
    article.id = "article";
    shadow.appendChild(article);
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (
      !CustomArticle.observedAttributes.includes(name) ||
      oldValue === newValue
    ) {
      return;
    }

    const articleEl = this.shadowRoot?.querySelector("#article");
    if (articleEl) {
      articleEl.innerHTML = newValue;
    }
  }
}

customElements.define("custom-article", CustomArticle);
