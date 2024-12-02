import { IExpandItem } from "./expandItem/IExpandItem";
import { IFallItem } from "./fallItem/IFallItem";
import { Item } from "./Item";

export class Clothes extends Item {
  constructor(src: string, fallStrategy: IFallItem, expandStrategy: IExpandItem, parentId: string = "") {
    super(fallStrategy, expandStrategy, parentId);
    const img = document.createElement("img") as HTMLImageElement;
    img.src = src;
    img.className = "opening__clothes-item";
    this.htmlElement = img;
    this.parent = document.getElementById(parentId) as HTMLElement;
    if (!this.parent) {
      this.parent = document.body;
    }
    this.parent.appendChild(this.htmlElement);
  }
}
