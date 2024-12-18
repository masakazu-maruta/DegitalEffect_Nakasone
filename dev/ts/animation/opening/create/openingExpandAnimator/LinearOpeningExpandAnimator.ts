import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import IOpeningExpandAnimator from "./IOpeningExpandAnimator";
import gsap from "gsap";

export default class LinearOpeningExpandAnimator implements IOpeningExpandAnimator {
  public expand = async (htmlElement: HTMLElement, duration: number, index: number): Promise<void> => {
    gsap.killTweensOf(htmlElement); // 以前のアニメーションを停止
    const newScale = 6;
    const tl = gsap.timeline();

    // Promiseを作成し、アニメーションの完了時にresolveする
    return new Promise<void>((resolve) => {
      const x =
        Math.random() * GlobalViewportManager.getViewPortWidth() * 1.5 - GlobalViewportManager.getViewPortWidth() * 0.25;
      const y =
        Math.random() * GlobalViewportManager.getViewPortHeight() * 1.5 - GlobalViewportManager.getViewPortHeight() * 0.25;
      const startRotation = Math.random() * 180;
      const goalRotation = startRotation + (Math.random() * 45 - 90);
      tl.fromTo(
        htmlElement,
        { scale: 0.5, x: "50vw", y: "50vh", rotation: startRotation, display: "block" },
        {
          scale: newScale,
          duration: duration,
          x: `${x}px`,
          y: `${y}px`,
          rotation: goalRotation,
          ease: "power2.out",
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };
}
