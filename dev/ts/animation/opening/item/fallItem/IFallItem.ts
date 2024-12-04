export interface IFallItem {
  fall(htmlElement: HTMLElement, goalElement: HTMLElement, onAnimationComplete: () => void): void;
}
