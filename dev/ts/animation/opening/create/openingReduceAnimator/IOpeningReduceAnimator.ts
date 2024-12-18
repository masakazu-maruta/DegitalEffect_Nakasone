export default interface IOpeningReduceAnimator {
  reduce(element: HTMLElement, duration: number, initScale: number, nextScale: number): Promise<void>;
}
