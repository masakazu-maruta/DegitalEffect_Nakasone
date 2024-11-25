import { ISwellWarehouse } from "./ISwellWarehouse";
import gsap from "gsap";

export class PopSwellWarehouse implements ISwellWarehouse {
  public swell = (imgElement: HTMLImageElement, updateScaleAction: (newScale: number) => void, oldScale: number): void => {
    gsap.killTweensOf(imgElement);
    const newScale = oldScale * 1.04;
    const swellScale = newScale * 1.05;
    updateScaleAction(newScale);
    const tl = gsap.timeline();
    tl.fromTo(imgElement, { scale: newScale }, { scale: swellScale, duration: 0.1, ease: "power2.out", yoyo: true, repeat: 1 });
  };
}
