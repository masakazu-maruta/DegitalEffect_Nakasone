export default interface IOpeningSwellAnimator {
  startAnim(element: HTMLElement, duration: number): Promise<void>;
}
