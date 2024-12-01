import { IReduceWarehouse } from "./reduceWarehouse/IReduceWarehouse";
import { ISwellWarehouse } from "./swellWarehouse/ISwellWarehouse";

export class Warehouse {
  public readonly imgElement: HTMLImageElement;
  private currentScale: number = 1;
  constructor(
    id: string,
    private swellStrategy: ISwellWarehouse,
    private reduceStrategy: IReduceWarehouse
  ) {
    this.imgElement = document.getElementById(id) as HTMLImageElement;
    console.log(this.imgElement);
  }

  public swell = () => {
    this.swellStrategy.swell(this.imgElement, this.setScale, this.currentScale);
  };
  public reduce = () => {
    this.reduceStrategy.reduce(this.imgElement, this.setScale, this.currentScale);
  };

  public setScale = (n: number) => {
    this.currentScale = n;
  };

  public getScale = () => {
    return this.currentScale;
  };
}
