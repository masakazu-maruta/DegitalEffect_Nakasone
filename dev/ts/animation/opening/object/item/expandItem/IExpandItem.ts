export interface IExpandItem {
  expand(imgElement: HTMLImageElement, onAnimationComplete: () => void): Promise<void>;
}
