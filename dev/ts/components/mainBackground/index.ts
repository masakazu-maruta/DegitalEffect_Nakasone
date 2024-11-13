import ClothesGenerator from "./interface/ClothesGenerator/ClothesGenerator";
import PatternClothesGenerator from "./interface/ClothesGenerator/PatternClothesGenerator";
import styles from "./styles.css";

export class MainBackground extends HTMLElement {
  private outerContainer: HTMLDivElement;
  private innerContainer: HTMLDivElement;
  private clothesGenerator: ClothesGenerator;
  static get observedAttributes() {
    return [];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initStructure();
    this.clothesGenerator = new PatternClothesGenerator(this.innerContainer);
    if (!this.shadowRoot) return;
    this.shadowRoot.appendChild(this.outerContainer);
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    this.shadowRoot.appendChild(styleElement);
  }

  connectedCallback() {
    this.clothesGenerator.startGenerating();
  }

  initStructure() {
    this.outerContainer = this.createOuterContainer();
    this.innerContainer = this.createInnerContainer();
    this.outerContainer.appendChild(this.innerContainer);
    this.outerContainer.className = "outer";
    this.innerContainer.className = "inner";
  }
  createOuterContainer() {
    return document.createElement("div");
  }
  createInnerContainer() {
    return document.createElement("div");
  }
}
