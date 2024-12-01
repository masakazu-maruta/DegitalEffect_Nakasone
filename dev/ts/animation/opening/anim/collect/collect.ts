import { Clothes } from "../../object/item/Clothes";
import { IExpandItem } from "../../object/item/expandItem/IExpandItem";
import { LinearExpandItem } from "../../object/item/expandItem/LinearExpandItem";
import { IFallItem } from "../../object/item/fallItem/IFallItem";
import { LinearFallItem } from "../../object/item/fallItem/LinearFallItem";
import { Item } from "../../object/item/Item";
import { Warehouse } from "../../object/warehouse/Warehouse";

const collect = async (imageUrls: string[], warehouse: Warehouse, finishedAction: () => void) => {
  const fallStrategy: IFallItem = new LinearFallItem();
  const expandStrategy: IExpandItem = new LinearExpandItem();
  const items: Item[] = generateElementArray(imageUrls, fallStrategy, expandStrategy);
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

const generateElementArray = (srcs: string[], fallStrategy: IFallItem, expandStrategy: IExpandItem) => {
  const imageElementArray: Item[] = [];
  srcs.forEach((src) => {
    const item = new Clothes(src, fallStrategy, expandStrategy, "script__openingCollectBox");
    imageElementArray.push(item);
  });
  return imageElementArray;
};

export default collect;
