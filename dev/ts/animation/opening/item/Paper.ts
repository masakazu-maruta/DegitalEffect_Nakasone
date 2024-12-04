import { IExpandItem } from "./expandItem/IExpandItem";
import { IFallItem } from "./fallItem/IFallItem";
import { Item } from "../item/Item";

export class Paper extends Item {
  constructor() {
    super();
    this.htmlElement = document.createElement("div") as HTMLDivElement;
    this.htmlElement.style.backgroundColor = this.createRandomColor();
    this.htmlElement.className = "opening__clothes-item --paper";
    // this.parent.appendChild(this.htmlElement);
  }

  public createRandomColor(): string {
    const light = 0;
    const r = Math.floor(Math.random() * (256 - light) + light);
    const g = Math.floor(Math.random() * (256 - light) + light);
    const b = Math.floor(Math.random() * (256 - light) + light);
    return `rgb(${r},${g},${b})`;
  }
}
