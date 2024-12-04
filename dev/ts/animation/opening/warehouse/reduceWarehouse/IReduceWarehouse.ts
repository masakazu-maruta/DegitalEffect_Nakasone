import { Warehouse } from "../Warehouse";

export interface IReduceWarehouse {
  reduce(warehouse: Warehouse): void;
}
