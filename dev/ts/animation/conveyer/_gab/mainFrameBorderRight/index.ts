export class MainFrameBorderRight extends HTMLElement {
  private svg: SVGSVGElement;
  private path: SVGPathElement;
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
    this.svgAnimate = this.createAnimate();
    this.svg.appendChild(this.path);
    this.path.appendChild(this.svgAnimate);
    this.shadowRoot.appendChild(this.svg);
  }
  connectedCallback() {
    this.setSize();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.setSize();
  }
  createElements(): SVGSVGElement {
    const svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return svg;
  }
  createPath(): SVGPathElement {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "transparent");
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "5");
    path.setAttribute("stroke-dasharray", "120,180");
    return path;
  }
  createAnimate(): SVGAnimateElement {
    const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate") as SVGAnimateElement;
    animate.setAttribute("attributeName", "stroke-dashoffset");
    animate.setAttribute("dur", "2");
    animate.setAttribute("fill", "freeze");
    return animate;
  }
  setSize() {
    const width = Number(this.getAttribute("width") ?? 100);
    const height = Number(this.getAttribute("height") ?? 100);
    this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    this.svg.setAttribute("width", `${width}`);
    this.svg.setAttribute("height", `${height}`);
    const length = height / 2 + (width * 2) / 3;
    this.path.setAttribute("d", `M ${width - 2.5} ${height / 2} V ${5} H ${width / 3}`);
    this.path.setAttribute("stroke-dasharray", `${length}`);
    this.svgAnimate.setAttribute("from", `${length}`);
    this.svgAnimate.setAttribute("to", `${0}`);
  }
}
