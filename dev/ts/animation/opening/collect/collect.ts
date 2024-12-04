import { Clothes } from "../item/Clothes";
import { IExpandItem } from "../item/expandItem/IExpandItem";
import { LinearExpandItem } from "../item/expandItem/LinearExpandItem";
import { IFallItem } from ".././item/fallItem/IFallItem";
import { LinearFallItem } from "../item/fallItem/LinearFallItem";
import { Item } from "../item/Item";
import { Warehouse } from "../warehouse/Warehouse";

const collect = async (imageUrls: string[], warehouse: Warehouse, finishedAction: () => void) => {
  const items: Item[] = generateElementArray(imageUrls);
  const animationPromises = items.map((item, index) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        item.fall(warehouse.imgElement, (i: Item) => {
          index % 8 === 0 ? warehouse.swell() : () => {};
          resolve();
        });
      }, index * 50);
    });
  });
  await Promise.all(animationPromises);
  finishedAction();
};

const generateElementArray = (srcs: string[]) => {
  const imageElementArray: Item[] = [];
  srcs.forEach((src) => {
    const item = new Clothes(src);
    imageElementArray.push(item);
  });
  return imageElementArray;
};

export default collect;
