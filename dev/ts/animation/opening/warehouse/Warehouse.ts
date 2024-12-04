import { IReduceWarehouse } from "./reduceWarehouse/IReduceWarehouse";
import { ISwellWarehouse } from "./swellWarehouse/ISwellWarehouse";

export class Warehouse {
  public readonly imgElement: HTMLImageElement;
  private swellStrategy: ISwellWarehouse;
  private reduceStrategy: IReduceWarehouse;
  constructor() {}

  public swell = () => {
    this.swellStrategy.swell(this);
  };
  public reduce = () => {
    this.reduceStrategy.reduce(this);
  };

  public getScale = () => {
    const transformValue = window.getComputedStyle(this.imgElement).transform;
    const scaleMatch = transformValue.match(/scale\(([^)]+)\)/);
    if (scaleMatch) {
      return parseFloat(scaleMatch[1]);
    } else {
      return 1;
    }
  };
}
