import { Warehouse } from "../Warehouse";
import { IReduceWarehouse } from "./IReduceWarehouse";
import gsap from "gsap";

export class LinearReduceWarehouse implements IReduceWarehouse {
  public reduce = (warehouse: Warehouse): void => {
    gsap.killTweensOf(warehouse.imgElement);
    const newScale = warehouse.getScale() * 0.3;
    gsap.fromTo(warehouse.imgElement, { scale: warehouse.getScale() }, { scale: newScale, duration: 0.5, ease: "power2.out" });
  };
}
