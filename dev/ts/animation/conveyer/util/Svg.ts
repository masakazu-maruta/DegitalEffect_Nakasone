export default class Svg {
  private htmlElement: SVGSVGElement;
  private maxWidth: number;
  private maxHeight: number;
  constructor(id: string) {
    const element: HTMLElement = document.getElementById(id) as HTMLElement;
    if (element instanceof SVGSVGElement) {
      this.htmlElement = element;
      this.update();
    } else if (!element) {
      throw new Error("elementはnullです");
    } else {
      throw new Error("SVGSVGElementではありません");
    }
    document.addEventListener("resize", () => this.update());
  }
  private update = () => {
    this.maxWidth = window.innerWidth;
    this.maxHeight = window.innerHeight;
    this.htmlElement.setAttribute("viewBox", `0 0 ${this.maxWidth} ${this.maxHeight}`);
  };

  public getElement = () => {
    return this.htmlElement;
  };

  public getMaxHeight = () => {
    return this.maxHeight;
  };
  public getMaxWidth = () => {
    return this.maxWidth;
  };

  public destroy = () => {
    document.removeEventListener("resize", () => this.update());
    this.htmlElement.remove();
  };
}
