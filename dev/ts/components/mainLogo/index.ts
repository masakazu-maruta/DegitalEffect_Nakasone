import template from "./template.html";
import styles from "./styles.css";

export class MainLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (!this.shadowRoot) throw Error("Browser does not support Shadow DOM");
    this.shadowRoot.innerHTML = template;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    this.shadowRoot.appendChild(styleElement);
  }
}
