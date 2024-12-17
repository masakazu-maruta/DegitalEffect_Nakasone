export default class ConveyerArrow {
  public readonly element: HTMLImageElement;
  constructor() {
    this.element = document.createElement("img") as HTMLImageElement;
    this.element.src = "assets/images/logo/arrowLeft.svg";
    this.element.className = "conveyer-ui__logo-icons-arrow";
  }

  public setParent = (parent: HTMLElement) => {
    parent.appendChild(this.element);
    this.element.style.top = `calc(50% -  ${this.element.offsetHeight / 2}px)`;
    this.element.style.left = `calc(50% - ${this.element.offsetWidth / 2}px)`;
  };
}
