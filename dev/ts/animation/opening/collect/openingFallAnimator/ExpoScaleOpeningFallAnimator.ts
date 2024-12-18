import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import IOpeningFallAnimator from "./IOpeningFallAnimator";
import gsap from "gsap";

export default class ExpoScaleOpeningFallAnimator implements IOpeningFallAnimator {
  private static goalElement: HTMLElement;
  private static goalElementRect: DOMRect;

  public startAnim = (htmlElement: HTMLElement, goalElement: HTMLElement, duration: number): Promise<void> => {
    if (goalElement != ExpoScaleOpeningFallAnimator.goalElement) {
      ExpoScaleOpeningFallAnimator.goalElement = goalElement;
      ExpoScaleOpeningFallAnimator.goalElementRect = goalElement.getBoundingClientRect();
    }
    gsap.killTweensOf(htmlElement);
    const newScale = 0.5;
    let mag = 60;
    if (GlobalViewportManager.getViewPortWidth() < 900) {
      mag = 110;
    }
    const _startX = Math.random() * mag + (100 - mag) / 2;
    const _startY = -10;
    const startX = (_startX / 100) * GlobalViewportManager.getViewPortWidth();
    const startY = (_startY / 100) * GlobalViewportManager.getViewPortHeight();
    const goalX =
      (ExpoScaleOpeningFallAnimator.goalElementRect.right + ExpoScaleOpeningFallAnimator.goalElementRect.left) / 2 -
      Math.random() * GlobalViewportManager.getViewPortWidth() * 0.025;
    const goalY = ExpoScaleOpeningFallAnimator.goalElementRect.top + htmlElement.getBoundingClientRect().height;
    const angle = this.calculateAngle(startX, startY, goalX, goalY);
    return new Promise<void>((resolve) => {
      gsap.fromTo(
        htmlElement,
        { scale: 1, x: `${startX}px`, y: `${startY}px`, rotation: angle, display: "block" },
        {
          scale: newScale,
          ease: "expoScale(0.5,7,none)",
          x: `${goalX}px`,
          y: `${goalY}px`,
          duration: duration,
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };

  public calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
    const rad = Math.atan2(y2 - y1, x2 - x1);
    const deg = (180 * rad) / Math.PI;
    const returnDeg = (deg - 90) / 1.5;
    const offsetDeg = Math.random() * 20 - 10;
    return returnDeg + offsetDeg;
  };
}
