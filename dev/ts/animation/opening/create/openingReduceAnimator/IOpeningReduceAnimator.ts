export default interface IOpeningReduceAnimator {
  reduce(element: HTMLElement, duration: number, initScale: number): Promise<void>;
}
