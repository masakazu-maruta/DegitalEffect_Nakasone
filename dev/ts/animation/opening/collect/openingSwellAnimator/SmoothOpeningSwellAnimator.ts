import GlobalFunction from "../../../../util/GlobalFunction";
import IOpeningSwellAnimator from "./IOpeningSwellAnimator";
import gsap from "gsap";

export default class SmoothSwellWarehouse implements IOpeningSwellAnimator {
  public startAnim = (element: HTMLElement, duration: number, nextScale: number): Promise<void> => {
    gsap.killTweensOf(element);
    return new Promise<void>((resolve) => {
      gsap.fromTo(
        element,
        { scale: 1 },
        {
          scale: nextScale,
          duration: duration,
          ease: "power2.out",
          repeat: 0,
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };
}
