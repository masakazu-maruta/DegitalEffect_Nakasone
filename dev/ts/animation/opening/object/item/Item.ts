import { IExpandItem } from "./expandItem/IExpandItem";
import { LinearExpandItem } from "./expandItem/LinearExpandItem";
import { IFallItem } from "./fallItem/IFallItem";

export abstract class Item {
  protected htmlElement: HTMLElement;
  protected parent: HTMLElement;
  constructor(
    private fallStrategy: IFallItem,
    private expandStrategy: IExpandItem,
    parentId: string = ""
  ) {}

  public fall = async (goalNode: HTMLElement, action: (item: Item) => void) => {
    this.fallStrategy.fall(this.htmlElement, goalNode, () => this.destroy(action));
  };

  public expand = async (action: (item: Item) => void) => {
    this.expandStrategy.expand(this.htmlElement, () => action(this));
  };
  public destroy = (action: (item: Item) => void) => {
    action(this);
    this.htmlElement.remove();
  };
}
