import { Warehouse } from "../Warehouse";
import { ISwellWarehouse } from "./ISwellWarehouse";
import gsap from "gsap";

export class PopSwellWarehouse implements ISwellWarehouse {
  public swell = (warehouse: Warehouse): void => {
    gsap.killTweensOf(warehouse.imgElement);
    const newScale = warehouse.getScale() * 1.1;
    const swellScale = newScale * 1.05;
    const tl = gsap.timeline();
    tl.fromTo(warehouse.imgElement, { scale: newScale }, { scale: swellScale, duration: 0.15, ease: "power2.out", repeat: 1 });
  };
}
