import GlobalFunction from "../../../../util/GlobalFunction";
import IOpeningSwellAnimator from "./IOpeningSwellAnimator";
import gsap from "gsap";

export default class PopSwellWarehouse implements IOpeningSwellAnimator {
  private static currentScale = 1;
  public startAnim = (element: HTMLElement, duration: number, nextScale: number): Promise<void> => {
    gsap.killTweensOf(element);
    PopSwellWarehouse.currentScale *= nextScale;
    const swellScale = PopSwellWarehouse.currentScale * 1.05;
    return new Promise<void>((resolve) => {
      gsap.fromTo(
        element,
        { scale: PopSwellWarehouse.currentScale },
        { scale: swellScale, duration: duration, yoyo: true, ease: "sine", repeat: 1, onComplete: () => resolve() }
      );
    });
  };
}
