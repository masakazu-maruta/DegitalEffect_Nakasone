export default interface IOpeningFallAnimator {
  startAnim(htmlElement: HTMLElement, goalElement: HTMLElement, duration: number): Promise<void>;
}
