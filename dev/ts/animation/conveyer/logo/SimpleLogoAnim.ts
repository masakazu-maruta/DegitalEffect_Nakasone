import gsap from "gsap";
import GlobalFunction from "../../../util/GlobalFunction";
import LogoAssetManager from "./LogoAssetManager";
import { ILogoAnim } from "./ILogoAnim";
export default class SimpleLogoAnim implements ILogoAnim {
  private manager: LogoAssetManager;
  private arrowElementArray: HTMLImageElement[] = [];
  constructor() {
    this.manager = LogoAssetManager.getInstance();
    this.manager.icons.forEach((element) => {
      element.style.top = `calc(50% -  ${element.offsetHeight / 2}px)`;
      element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`;
      const arrowElement = this.createArrowElement();
      this.arrowElementArray.push(arrowElement);
      this.manager.container.appendChild(element);
      this.manager.container.appendChild(arrowElement);
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
      this.manager.container,
      {
        rotate: 0,
      },
      {
        rotate: 360,
        repeat: -1,
        duration: duration,
        ease: "linear",
        onUpdate: () => {
          const currentRotate = gsap.getProperty(this.manager.container, "rotate") as number;
          this.setPosition(currentRotate);
        },
      }
    );
  };
  public startAnim2 = () => {
    return;
  };

  private setPosition = (currentRotate: number) => {
    const length = this.manager.icons.length + this.arrowElementArray.length;
    for (let index = 0; index < length; index++) {
      const i = Math.floor(index / 2);
      if (index % 2 === 0) {
        this.setLogoPosition(this.manager.icons[i], length, index, currentRotate);
      } else {
        this.setArrowPosition(this.arrowElementArray[i], length, index);
      }
    }
  };

  private setLogoPosition = (element: HTMLElement, length: number, index: number, currentRotate: number) => {
    const radius = (this.manager.container.offsetHeight / 2) * 0.7;
    const angleStep = 360 / length;
    const angle = angleStep * index;
    element.style.transform = `rotate(${angle}deg) translateY(${radius}px) rotate(${-angle - currentRotate}deg)`;
  };
  private setArrowPosition = (element: HTMLElement, length: number, index: number) => {
    const radius = (this.manager.container.offsetHeight / 2) * 0.7;
    const angleStep = 360 / length;
    const angle = angleStep * index;
    element.style.transform = `rotate(${angle}deg) translateY(${radius}px)`;
  };
}
