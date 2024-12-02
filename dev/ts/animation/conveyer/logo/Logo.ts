import gsap from "gsap";
export default class Logo {
  public readonly htmlElement: HTMLElement;
  private imgElement: HTMLImageElement;
  private pElement: HTMLParagraphElement;
  constructor(src: string, text: string, modifier: string) {
    this.htmlElement = document.createElement("div");
    this.initImageElement(src);
    this.initParagraphElement(text);
    this.initHtmlElement(modifier);
  }

  initHtmlElement = (modifier: string) => {
    this.htmlElement.appendChild(this.imgElement);
    this.htmlElement.appendChild(this.pElement);
    this.htmlElement.className = `conveyer-ui__logo-icons-item ${modifier}`;
    const resizeObserver = new ResizeObserver(() => {
      const halfHeight = this.htmlElement.offsetHeight / 2;
      const halfWidth = this.htmlElement.offsetWidth / 2;
      this.htmlElement.style.top = `calc(50% - ${halfHeight}px)`;
      this.htmlElement.style.left = `calc(50% - ${halfWidth}px)`;
    });
    resizeObserver.observe(this.htmlElement);
  };

  initImageElement = (src: string) => {
    this.imgElement = document.createElement("img");
    this.imgElement.src = src;
    this.imgElement.className = "conveyer-ui__logo-icons-img";
  };
  initParagraphElement = (text: string) => {
    this.pElement = document.createElement("p");
    this.pElement.textContent = text;
    this.pElement.className = "conveyer-ui__logo-icons-text";
  };
}
