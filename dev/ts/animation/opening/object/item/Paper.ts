import { IExpandItem } from "./expandItem/IExpandItem";
import { IFallItem } from "./fallItem/IFallItem";
import { Item } from "./Item";

export class Paper extends Item {
  public readonly htmlElement: HTMLElement;
  private currentSize: number;
  constructor(fallStrategy: IFallItem, expandStrategy: IExpandItem, parentId: string = "") {
    super(fallStrategy, expandStrategy, parentId);
    this.htmlElement = document.createElement("div") as HTMLDivElement;
    this.htmlElement.style.backgroundColor = this.createRandomColor();
    this.htmlElement.className = "opening__clothes-item --paper";
    this.parent = document.getElementById(parentId) as HTMLElement;
    if (!this.parent) {
      this.parent = document.body;
    }
    this.parent.appendChild(this.htmlElement);
  }

  public createRandomColor(): string {
    const light = 0;
    const r = Math.floor(Math.random() * (256 - light) + light);
    const g = Math.floor(Math.random() * (256 - light) + light);
    const b = Math.floor(Math.random() * (256 - light) + light);
    return `rgb(${r},${g},${b})`;
  }
}
