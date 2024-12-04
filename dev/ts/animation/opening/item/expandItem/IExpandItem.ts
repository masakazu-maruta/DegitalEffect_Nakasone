export interface IExpandItem {
  expand(htmlElement: HTMLElement, onAnimationComplete: () => void): Promise<void>;
}
