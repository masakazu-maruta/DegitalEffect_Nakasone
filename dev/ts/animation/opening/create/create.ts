import { Clothes } from "../item/Clothes";
import { IExpandItem } from "../item/expandItem/IExpandItem";
import { LinearExpandItem } from "../item/expandItem/LinearExpandItem";
import { IFallItem } from "../item/fallItem/IFallItem";
import { LinearFallItem } from "../item/fallItem/LinearFallItem";
import { Item } from "../item/Item";
import { Paper } from "../item/Paper";
import { Warehouse } from "../warehouse/Warehouse";

const create = async (imageUrls: string[], warehouse: Warehouse, finishedAction: () => void) => {
  const items: Item[] = generateElementArray(imageUrls);
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

const generateElementArray = (srcs: string[]) => {
  const imageElementArray: Item[] = [];
  srcs.forEach((src) => {
    const item = new Clothes(src);
    const papers: Paper[] = [];
    for (let i = 0; i < 3; i++) {
      papers.push(new Paper());
    }
    imageElementArray.push(item, ...papers);
  });
  return imageElementArray;
};

export default create;
