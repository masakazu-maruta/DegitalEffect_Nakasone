import GlobalFunction from "../../../util/GlobalFunction";
import { IExpandItem } from "./expandItem/IExpandItem";
import { LinearExpandItem } from "./expandItem/LinearExpandItem";
import { IFallItem } from "./fallItem/IFallItem";

export abstract class Item {
  protected htmlElement: HTMLElement;
  private fallStrategy: IFallItem;
  private expandStrategy: IExpandItem;
  constructor() {}

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
