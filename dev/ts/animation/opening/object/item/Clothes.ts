import { IExpandItem } from "./expandItem/IExpandItem";
import { IFallItem } from "./fallItem/IFallItem";
import { Item } from "./Item";

export class Clothes extends Item {
  constructor(src: string, fallStrategy: IFallItem, expandStrategy: IExpandItem, parentId: string = "") {
    super(fallStrategy, expandStrategy, parentId);
    const img = document.createElement("img") as HTMLImageElement;
    img.src = src;
    this.htmlElement = img;
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.display = "none";
    this.htmlElement.style.transform = "translate(-50%,-50%)";
    this.htmlElement.style.width = "160px";
    this.parent = document.getElementById(parentId) as HTMLElement;
    if (!this.parent) {
      this.parent = document.body;
    }
    this.parent.appendChild(this.htmlElement);
  }
}
