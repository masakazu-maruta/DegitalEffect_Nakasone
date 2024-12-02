import gsap from "gsap";
import Logo from "./Logo";
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
    const infoArray: LogoInformation[] = [
      { src: "assets/images/logo/wear.svg", text: "着る", modifier: "--wear" },
      { src: "assets/images/logo/bee.png", text: "服を回収する", modifier: "--collect" },
      { src: "assets/images/logo/recycle.svg", text: "リサイクル", modifier: "--recycle" },
      { src: "assets/images/logo/create.svg", text: "服を作る", modifier: "--create" },
    ];
    infoArray.forEach((info) => {
      const logo: Logo = new Logo(info.src, info.text, info.modifier);
      const arrowElement = this.createArrowElement();
      this.parentElement.appendChild(logo.htmlElement);
      this.parentElement.appendChild(arrowElement);
      this.htmlElementArray.push(logo.htmlElement);
      this.arrowElementArray.push(arrowElement);
    });
  }

  createArrowElement = () => {
    const element = document.createElement("img") as HTMLImageElement;
    element.src = "assets/images/logo/arrowLeft.svg";
    element.className = "conveyer-ui__logo-icons-arrow";
    const resizeObserver = new ResizeObserver(() => {
      const halfHeight = element.offsetHeight / 2;
      const halfWidth = element.offsetWidth / 2;
      element.style.top = `calc(50% -  ${halfHeight}px)`;
      element.style.left = `calc(50% - ${halfWidth}px)`;
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

  private logoRotate = (element: HTMLElement) => {};
}
