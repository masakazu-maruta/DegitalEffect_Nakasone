import { IReduceWarehouse } from "./IReduceWarehouse";
import gsap from "gsap";

export class LinearReduceWarehouse implements IReduceWarehouse {
  public reduce = (imgElement: HTMLImageElement, updateScaleAction: (newScale: number) => void, oldScale: number): void => {
    gsap.killTweensOf(imgElement);
    const newScale = oldScale * 0.3;
    updateScaleAction(newScale);
    gsap.fromTo(imgElement, { scale: oldScale }, { scale: newScale, duration: 0.5, ease: "power2.out" });
  };
}
