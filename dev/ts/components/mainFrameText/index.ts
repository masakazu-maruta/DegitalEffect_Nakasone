export class MainFrameText extends HTMLElement {
  private svg: SVGSVGElement;
  private path: SVGPathElement;
  private text: SVGTextElement;
  private textPath: SVGTextPathElement;
  private svgAnimate: SVGAnimateElement;

  static get observedAttributes() {
    return ["width", "height"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (!this.shadowRoot) throw Error("Browser does not support Shadow DOM");

    this.svg = this.createElements();
    this.path = this.createPath();
    this.text = this.createText();
    this.textPath = this.createTextPath();
    this.svgAnimate = this.createAnimate();
    this.text.appendChild(this.textPath);
    this.textPath.appendChild(this.svgAnimate);
    this.svg.appendChild(this.path);
    this.svg.appendChild(this.text);
    this.shadowRoot.appendChild(this.svg);
  }

  connectedCallback() {
    this.setSize();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    this.setSize();
  }

  createElements(): SVGSVGElement {
    const svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return svg;
  }

  createPath(): SVGPathElement {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "transparent");
    path.setAttribute("stroke", "none");
    path.setAttribute("id", "myPath");
    return path;
  }

  createText(): SVGTextElement {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("font-size", "88");
    text.setAttribute("font-weight", "700");
    text.setAttribute("line-height", "1.3");
    text.setAttribute("letter-spacing", ".14em");
    text.setAttribute("font-family", "'Amiko', sans-serif");
    text.setAttribute("fill", "black");
    return text;
  }

  createTextPath(): SVGTextPathElement {
    const textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
    textPath.setAttribute("href", "#myPath");
    textPath.setAttribute("startOffset", "0%");
    textPath.textContent = "CLOTHS to CLOTHS";
    return textPath;
  }

  createAnimate(): SVGAnimateElement {
    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate") as SVGAnimateElement;
    animate.setAttribute("attributeName", "startOffset");
    animate.setAttribute("dur", "2s");
    animate.setAttribute("fill", "freeze");
    animate.setAttribute("keyTimes", "0;1");
    return animate;
  }

  setSize() {
    const width = Number(this.getAttribute("width") ?? 100);
    const height = Number(this.getAttribute("height") ?? 100);
    this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    this.svg.setAttribute("width", `${width}`);
    this.svg.setAttribute("height", `${height}`);
    const textLength = this.text.getComputedTextLength();
    const halfLength = height + width;
    this.path.setAttribute("d", `M 2.5 ${-(halfLength - 10)} V ${height - 5} H ${width - 5}`);
    this.svgAnimate.setAttribute("values", `0;${halfLength + height}`);
  }
}
