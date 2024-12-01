import gsap from "gsap";
export default class Logo {
  public readonly htmlElement: HTMLElement;
  private imgElement: HTMLImageElement;
  private pElement: HTMLParagraphElement;
  constructor(src: string, text: string, size: number) {
    this.htmlElement = document.createElement("div");
    this.initImageElement(src);
    this.initParagraphElement(text);
    this.initHtmlElement(size);
  }

  initHtmlElement = (width: number) => {
    this.htmlElement.style.position = "absolute";
    this.htmlElement.appendChild(this.imgElement);
    this.htmlElement.appendChild(this.pElement);
    this.htmlElement.style.display = "flex";
    this.htmlElement.style.flexDirection = "column";
    this.htmlElement.style.alignItems = "center";
    this.htmlElement.style.justifyContent = "space-between";
    this.htmlElement.style.width = `${width}px`;
    this.htmlElement.style.height = `auto`;
    this.htmlElement.style.position = "absolute";
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
    this.imgElement.style.width = "100%";
    this.imgElement.style.height = "100%";
    this.imgElement.style.marginBottom = "1rem";
    this.imgElement.style.objectFit = "contain";
  };
  initParagraphElement = (text: string) => {
    this.pElement = document.createElement("p");
    this.pElement.textContent = text;
    this.pElement.style.width = "100%";
    this.pElement.style.height = "100%";
    this.pElement.style.display = "flex"; // Flexbox を使用
    this.pElement.style.alignItems = "center"; // 垂直方向の中央揃え
    this.pElement.style.justifyContent = "center"; // 水平方向の中央揃え
    this.pElement.style.textAlign = "center";
    this.pElement.style.fontSize = "1.8em";
    this.pElement.style.letterSpacing = ".14em";
    this.pElement.style.fontWeight = "700";
    this.pElement.style.whiteSpace = "nowrap"; // 折り返しを防止（必要なら削除）
    this.pElement.style.overflow = "visible";
    this.pElement.style.margin = "0";
  };
}
