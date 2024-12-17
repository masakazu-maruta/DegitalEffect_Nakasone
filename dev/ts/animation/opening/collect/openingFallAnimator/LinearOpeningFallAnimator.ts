import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import IOpeningFallAnimator from "./IOpeningFallAnimator";
import gsap from "gsap";

export default class LinearOpeningFallAnimator implements IOpeningFallAnimator {
  private static goalElement: HTMLElement;
  private static goalElementRect: DOMRect;

  public startAnim = (htmlElement: HTMLElement, goalElement: HTMLElement, duration: number): Promise<void> => {
    if (goalElement != LinearOpeningFallAnimator.goalElement) {
      LinearOpeningFallAnimator.goalElement = goalElement;
      LinearOpeningFallAnimator.goalElementRect = goalElement.getBoundingClientRect();
    }
    gsap.killTweensOf(htmlElement);
    const newScale = 0.5;
    const _startX = Math.random() * 80 + 10;
    const _startY = -10;
    const startX = (_startX / 100) * GlobalViewportManager.getViewPortWidth();
    const startY = (_startY / 100) * GlobalViewportManager.getViewPortHeight();
    const goalX = (LinearOpeningFallAnimator.goalElementRect.right + LinearOpeningFallAnimator.goalElementRect.left) / 2 - 50;
    const goalY = LinearOpeningFallAnimator.goalElementRect.top + htmlElement.getBoundingClientRect().height;
    const angle = this.calculateAngle(startX, startY, goalX, goalY);
    return new Promise<void>((resolve) => {
      gsap.fromTo(
        htmlElement,
        { scale: 1, x: `${startX}px`, y: `${startY}px`, rotation: angle, display: "block" },
        {
          scale: newScale,
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
    return (deg - 90) / 1.5;
  };
}
