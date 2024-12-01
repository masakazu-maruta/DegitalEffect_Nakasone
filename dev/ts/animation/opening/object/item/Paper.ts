import { IExpandItem } from "./expandItem/IExpandItem";
import { IFallItem } from "./fallItem/IFallItem";
import { Item } from "./Item";

export class Paper extends Item {
  public readonly htmlElement: HTMLElement;
  private currentSize: number;
  constructor(fallStrategy: IFallItem, expandStrategy: IExpandItem, parentId: string = "") {
    super(fallStrategy, expandStrategy, parentId);
    this.htmlElement = document.createElement("div") as HTMLDivElement;
    this.setSize(10);
    this.htmlElement.style.position = "absolute";
    this.htmlElement.style.display = "none";
    this.htmlElement.style.border = "1px solid black";
    this.htmlElement.style.borderRadius = "25%";
    this.htmlElement.style.transform = "translate(-50%,-50%)";
    this.htmlElement.style.backgroundColor = this.createRandomColor();
    this.parent = document.getElementById(parentId) as HTMLElement;
    if (!this.parent) {
      this.parent = document.body;
    }
    this.parent.appendChild(this.htmlElement);
  }

  public setSize(n: number) {
    this.currentSize = n;
    this.htmlElement.style.width = `${n}px`;
    this.htmlElement.style.height = `${n}px`;
  }

  public createRandomColor(): string {
    const light = 0;
    const r = Math.floor(Math.random() * (256 - light) + light);
    const g = Math.floor(Math.random() * (256 - light) + light);
    const b = Math.floor(Math.random() * (256 - light) + light);
    return `rgb(${r},${g},${b})`;
  }
}
