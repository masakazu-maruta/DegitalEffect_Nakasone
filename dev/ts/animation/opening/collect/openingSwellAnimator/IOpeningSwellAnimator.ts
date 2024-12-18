export default interface IOpeningSwellAnimator {
  startAnim(element: HTMLElement, duration: number, nextScale: number): Promise<void>;
}
