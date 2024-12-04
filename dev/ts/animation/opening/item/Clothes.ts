import { IExpandItem } from "./expandItem/IExpandItem";
import { IFallItem } from "./fallItem/IFallItem";
import { Item } from "./Item";

export class Clothes extends Item {
  constructor(src: string) {
    super();
    const img = document.createElement("img") as HTMLImageElement;
    img.src = src;
    img.className = "opening__clothes-item";
    this.htmlElement = img;
    // this.parent.appendChild(this.htmlElement);
  }
}
