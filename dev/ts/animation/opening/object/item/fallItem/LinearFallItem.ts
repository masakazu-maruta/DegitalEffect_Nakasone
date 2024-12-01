import { GlobalViewportManager } from "../../../../../util/GlobalViewportManager";
import { IFallItem } from "./IFallItem";
import gsap from "gsap";

export class LinearFallItem implements IFallItem {
  private static goalElement: HTMLElement;
  private static goalElementRect: DOMRect;

  public fall = (htmlElement: HTMLElement, goalElement: HTMLElement, onAnimationComplete: () => void): void => {
    if (goalElement != LinearFallItem.goalElement) {
      LinearFallItem.goalElement = goalElement;
      LinearFallItem.goalElementRect = goalElement.getBoundingClientRect();
    }
    gsap.killTweensOf(htmlElement);
    const newScale = 0.5;
    const tl = gsap.timeline({
      onComplete: () => {
        onAnimationComplete();
      },
    });
    const _startX = Math.random() * 80 + 10;
    const _startY = -10;
    const startX = (_startX / 100) * GlobalViewportManager.getViewPortWidth();
    const startY = (_startY / 100) * GlobalViewportManager.getViewPortHeight();
    const goalX = (LinearFallItem.goalElementRect.right + LinearFallItem.goalElementRect.left) / 2 - 50;
    const goalY = LinearFallItem.goalElementRect.top + htmlElement.getBoundingClientRect().height;
    const angle = this.calculateAngle(startX, startY, goalX, goalY);
    tl.fromTo(
      htmlElement,
      { scale: 1, x: `${startX}px`, y: `${startY}px`, rotation: angle, display: "block" },
      { scale: newScale, x: `${goalX}px`, y: `${goalY}px`, duration: 1 }
    );
  };

  public calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
    const rad = Math.atan2(y2 - y1, x2 - x1);
    const deg = (180 * rad) / Math.PI;
    console.log(deg);
    return (deg - 90) / 1.5;
  };
}
