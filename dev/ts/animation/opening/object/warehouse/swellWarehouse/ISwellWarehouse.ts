export interface ISwellWarehouse {
  swell(imgElement: HTMLImageElement, updateScale: (newScale: number) => void, oldScale: number): void;
}
