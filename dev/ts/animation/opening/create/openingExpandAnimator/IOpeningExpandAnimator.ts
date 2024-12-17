export default interface IOpeningExpandAnimator {
  expand(htmlElement: HTMLElement, duration: number): Promise<void>;
}
