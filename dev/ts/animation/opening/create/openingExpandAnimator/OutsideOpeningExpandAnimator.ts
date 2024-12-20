import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import IOpeningExpandAnimator from "./IOpeningExpandAnimator";
import gsap from "gsap";

export default class OutsideOpeningExpandAnimator implements IOpeningExpandAnimator {
  public expand = async (htmlElement: HTMLElement, duration: number, index: number): Promise<void> => {
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
    const maxX = GlobalViewportManager.getViewPortWidth() * 2;
    const maxY = GlobalViewportManager.getViewPortHeight() * 2;
    const offsetX = (GlobalViewportManager.getViewPortWidth() - maxX) / 2;
    const offsetY = (GlobalViewportManager.getViewPortHeight() - maxY) / 2;
    const sideMag = isXSide ? maxX : maxY;
    const randomMag = isXSide ? maxY : maxX;
    const sidePosition = Math.random() > 0.5 ? Math.random() * 0.3 * sideMag : (Math.random() * 0.3 + 0.7) * sideMag;
    const randomPosition = Math.random() * randomMag;
    if (isXSide) {
      return [sidePosition + offsetX, randomPosition + offsetY];
    } else {
      return [randomPosition + offsetX, sidePosition + offsetY];
    }
  };
}
