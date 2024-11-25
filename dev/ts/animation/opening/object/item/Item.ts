import { IExpandItem } from "./expandItem/IExpandItem";
import { LinearExpandItem } from "./expandItem/LinearExpandItem";
import { IFallItem } from "./fallItem/IFallItem";

export class Item {
  private readonly imgElement: HTMLImageElement;

  constructor(
    src: string,
    x: number,
    y: number,
    parent: HTMLElement = document.body,
    private fallStrategy: IFallItem,
    private expandStrategy: IExpandItem
  ) {
    this.imgElement = document.createElement("img");
    this.imgElement.src = src;
    this.imgElement.style.position = "absolute";
    this.imgElement.style.top = `${y}`;
    this.imgElement.style.left = `${x}`;
    this.imgElement.style.transform = "translate(-50%,-50%)";
    parent.appendChild(this.imgElement);
  }

  public fall = async (action: (item: Item) => void) => {
    this.fallStrategy.fall(this.imgElement, () => this.destroy(action));
  };

  public expand = async (action: (item: Item) => void) => {
    this.expandStrategy.expand(this.imgElement, () => action(this));
  };
  public destroy = (action: (item: Item) => void) => {
    action(this);
    this.imgElement.remove();
  };
}
