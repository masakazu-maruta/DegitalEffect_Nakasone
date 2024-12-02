import gsap from "gsap";
interface LogoInformation {
  src: string;
  text: string;
  modifier: string;
}
export default class Logos {
  private parentElement: HTMLElement;
  private htmlElementArray: HTMLElement[] = [];
  private arrowElementArray: HTMLImageElement[] = [];
  constructor(containerId: string) {
    const _parentElement = document.getElementById(containerId);
    _parentElement ? (this.parentElement = _parentElement) : null;
    if (!this.parentElement) throw new Error("containerが見つかりませんでした。");
    document.querySelectorAll(".conveyer-ui__logo-icons-item").forEach((element) => {
      if (!element || !(element instanceof HTMLElement)) throw new Error("icon-itemが見つかりません");
      element.style.top = `calc(50% -  ${element.offsetHeight / 2}px)`;
      element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`;
      this.htmlElementArray.push(element);
      this.arrowElementArray.push(this.createArrowElement());
    });
    this.arrowElementArray.forEach((element) => {
      this.parentElement.appendChild(element);
    });
  }

  createArrowElement = () => {
    const element = document.createElement("img") as HTMLImageElement;
    element.src = "assets/images/logo/arrowLeft.svg";
    element.className = "conveyer-ui__logo-icons-arrow";
    const resizeObserver = new ResizeObserver(() => {
      element.style.top = `calc(50% -  ${element.offsetHeight / 2}px)`;
      element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`;
    });
    resizeObserver.observe(element);
    return element;
  };
  public startAnim = (fadeInTime: number, duration: number) => {
    const logo = document.getElementById("script-logo") as HTMLElement;
    if (!logo) throw new Error("logoが見つかりません");
    gsap.fromTo(
      logo,
      {
        opacity: 0,
      },
      { opacity: 1, duration: fadeInTime, ease: "linear" }
    );
    gsap.fromTo(
      this.parentElement,
      {
        rotate: 0,
      },
      {
        rotate: 360,
        repeat: -1,
        duration: duration,
        ease: "linear",
        onUpdate: () => {
          const currentRotate = gsap.getProperty(this.parentElement, "rotate") as number;
          this.setPosition(currentRotate);
        },
      }
    );
  };
  public startAnim2 = () => {
    return;
  };

  private setPosition = (currentRotate: number) => {
    const length = this.htmlElementArray.length + this.arrowElementArray.length;
    for (let index = 0; index < length; index++) {
      const i = Math.floor(index / 2);
      if (index % 2 === 0) {
        this.setLogoPosition(this.htmlElementArray[i], length, index, currentRotate);
      } else {
        this.setArrowPosition(this.arrowElementArray[i], length, index);
      }
    }
  };

  private setLogoPosition = (element: HTMLElement, length: number, index: number, currentRotate: number) => {
    const radius = (this.parentElement.offsetHeight / 2) * 0.7;
    const angleStep = 360 / length;
    const angle = angleStep * index;
    element.style.transform = `rotate(${angle}deg) translateY(${radius}px) rotate(${-angle - currentRotate}deg)`;
  };
  private setArrowPosition = (element: HTMLElement, length: number, index: number) => {
    const radius = (this.parentElement.offsetHeight / 2) * 0.7;
    const angleStep = 360 / length;
    const angle = angleStep * index;
    element.style.transform = `rotate(${angle}deg) translateY(${radius}px)`;
  };
}
