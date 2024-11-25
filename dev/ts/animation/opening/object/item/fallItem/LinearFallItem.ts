import { IFallItem } from "./IFallItem";
import gsap from "gsap";

export class LinearFallItem implements IFallItem {
  public fall = (imgElement: HTMLImageElement, onAnimationComplete: () => void): void => {
    gsap.killTweensOf(imgElement);
    const newScale = 0.5;
    const tl = gsap.timeline({
      onComplete: () => {
        onAnimationComplete();
      },
    });
    tl.fromTo(imgElement, { scale: 1 }, { scale: newScale, duration: 5, ease: "power2.out", repeat: 1 });
  };
}
