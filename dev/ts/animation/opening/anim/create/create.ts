import { Clothes } from "../../object/item/Clothes";
import { IExpandItem } from "../../object/item/expandItem/IExpandItem";
import { LinearExpandItem } from "../../object/item/expandItem/LinearExpandItem";
import { IFallItem } from "../../object/item/fallItem/IFallItem";
import { LinearFallItem } from "../../object/item/fallItem/LinearFallItem";
import { Item } from "../../object/item/Item";
import { Paper } from "../../object/item/Paper";
import { Warehouse } from "../../object/warehouse/Warehouse";

const create = async (imageUrls: string[], warehouse: Warehouse, finishedAction: () => void) => {
  const expandStrategy: IExpandItem = new LinearExpandItem();
  const fallStrategy: IFallItem = new LinearFallItem();
  const items: Item[] = generateElementArray(imageUrls, fallStrategy, expandStrategy);
  console.log(imageUrls);
  const warehousePromises = new Promise<void>(async (resolve) => {
    await warehouse.reduce();
    resolve();
  });
  const animationPromises = items.map((item, index) => {
    return new Promise<void>((resolve) => {
      item.expand((i: Item) => resolve());
    });
  });
  await Promise.all([animationPromises, warehousePromises]);
  finishedAction();
};

const generateElementArray = (srcs: string[], fallStrategy: IFallItem, expandStrategy: IExpandItem) => {
  const imageElementArray: Item[] = [];
  srcs.forEach((src) => {
    const item = new Clothes(src, fallStrategy, expandStrategy, "script__openingCreateBox");
    const papers: Paper[] = [];
    for (let i = 0; i < 3; i++) {
      papers.push(new Paper(fallStrategy, expandStrategy, "script__openingCreateBox"));
    }
    imageElementArray.push(item, ...papers);
  });
  return imageElementArray;
};

export default create;
