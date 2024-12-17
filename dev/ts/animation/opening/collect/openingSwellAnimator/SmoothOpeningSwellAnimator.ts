import GlobalFunction from "../../../../util/GlobalFunction";
import IOpeningSwellAnimator from "./IOpeningSwellAnimator";
import gsap from "gsap";

export default class SmoothSwellWarehouse implements IOpeningSwellAnimator {
  public startAnim = (element: HTMLElement, duration: number): Promise<void> => {
    gsap.killTweensOf(element);
    return new Promise<void>((resolve) => {
      gsap.fromTo(
        element,
        { scale: 1 },
        {
          scale: 2,
          duration: duration,
          ease: "power1.out",
          repeat: 0,
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };
}
