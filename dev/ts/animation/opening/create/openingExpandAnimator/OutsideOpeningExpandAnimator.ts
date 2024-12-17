import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import IOpeningExpandAnimator from "./IOpeningExpandAnimator";
import gsap from "gsap";

export default class OutsideOpeningExpandAnimator implements IOpeningExpandAnimator {
  public expand = async (htmlElement: HTMLElement, duration: number): Promise<void> => {
    gsap.killTweensOf(htmlElement); // 以前のアニメーションを停止
    const newScale = 4;
    const tl = gsap.timeline();

    // Promiseを作成し、アニメーションの完了時にresolveする
    return new Promise<void>((resolve) => {
      const positionArray = this.randomPosition();
      const x = positionArray[0];
      const y = positionArray[1];
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

  private randomPosition = (): number[] => {
    const isXSide = Math.random() > 0.5 ? true : false;
    const sideMag = isXSide ? GlobalViewportManager.getViewPortWidth() : GlobalViewportManager.getViewPortHeight() * 2;
    const randomMag = !isXSide ? GlobalViewportManager.getViewPortWidth() : GlobalViewportManager.getViewPortHeight() * 2;
    const sidePosition = Math.random() > 0.5 ? Math.random() * 0.25 * sideMag : (Math.random() * 0.25 + 0.75) * sideMag;
    const randomPosition = Math.random() * randomMag;
    if (isXSide) {
      return [sidePosition, randomPosition];
    } else {
      return [randomPosition, sidePosition];
    }
  };
}
