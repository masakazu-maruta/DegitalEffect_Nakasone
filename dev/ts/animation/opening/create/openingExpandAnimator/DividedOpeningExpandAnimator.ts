import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import IOpeningExpandAnimator from "./IOpeningExpandAnimator";
import gsap from "gsap";

export default class DividedOpeningExpandAnimator implements IOpeningExpandAnimator {
  private currentIndex = 0;
  private row = 6;
  private column = 6;
  public expand = async (htmlElement: HTMLElement, duration: number, index: number): Promise<void> => {
    const newScale = 5;
    const tl = gsap.timeline();
    // Promiseを作成し、アニメーションの完了時にresolveする
    return new Promise<void>((resolve) => {
      const maxX = GlobalViewportManager.getViewPortWidth() * 1.5;
      const maxY = GlobalViewportManager.getViewPortHeight() * 1.5;
      const position = this.setPosition(maxX, maxY, index);
      const startRotation = Math.random() * 180;
      const goalRotation = startRotation + (Math.random() * 45 - 90);
      tl.fromTo(
        htmlElement,
        { scale: 0.5, x: "50vw", y: "50vh", rotation: startRotation, display: "block" },
        {
          scale: newScale,
          duration: duration,
          x: `${position[0]}px`,
          y: `${position[1]}px`,
          rotation: goalRotation,
          ease: "power2.out",
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };

  setPosition = (maxX: number, maxY: number, index: number): number[] => {
    index = index % (this.row * this.column);
    const xIndex = index % this.column;
    const yIndex = Math.floor(index / this.column);
    const xBlockSize = maxX / this.column;
    const yBlockSize = maxY / this.row;
    const range = 0.1;
    const xPosition = Math.random() * xBlockSize * range + xBlockSize * xIndex + xBlockSize / 2 - xBlockSize * (range / 2);
    const yPosition = Math.random() * yBlockSize * range + yBlockSize * yIndex + yBlockSize / 2 - yBlockSize * (range / 2);
    const offsetX = (GlobalViewportManager.getViewPortWidth() - maxX) / 2;
    const offsetY = (GlobalViewportManager.getViewPortHeight() - maxY) / 2;
    return [xPosition + offsetX, yPosition + offsetY];
  };
}
