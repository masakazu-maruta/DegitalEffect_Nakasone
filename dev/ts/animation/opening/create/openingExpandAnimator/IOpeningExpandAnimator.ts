export default interface IOpeningExpandAnimator {
  expand(htmlElement: HTMLElement, duration: number, index: number): Promise<void>;
}
