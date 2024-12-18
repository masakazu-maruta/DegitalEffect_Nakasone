import GlobalFunction from "../../../../util/GlobalFunction";
import IOpeningReduceAnimator from "./IOpeningReduceAnimator";
import gsap from "gsap";

export default class LinearOpeningReduceAnimator implements IOpeningReduceAnimator {
  public reduce = async (element: HTMLElement, duration: number, initScale: number, nextScale: number): Promise<void> => {
    gsap.killTweensOf(element);
    const currentScale = initScale;
    const newScale = nextScale;
    return new Promise<void>((resolve) => {
      gsap.fromTo(
        element,
        {
          scale: currentScale,
        },
        {
          scale: newScale,
          duration: duration,
          ease: "power2.out",
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };
}
