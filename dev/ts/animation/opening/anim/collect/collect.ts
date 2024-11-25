import { IExpandItem } from "../../object/item/expandItem/IExpandItem";
import { LinearExpandItem } from "../../object/item/expandItem/LinearExpandItem";
import { IFallItem } from "../../object/item/fallItem/IFallItem";
import { LinearFallItem } from "../../object/item/fallItem/LinearFallItem";
import { Item } from "../../object/item/Item";

const collect = async (imageUrls: string[], fallFinishedAction: () => void, finishedAction: () => void) => {
  const itemCount = 24;
  const fallStrategy: IFallItem = new LinearFallItem();
  const expandStrategy: IExpandItem = new LinearExpandItem();
  const items: Item[] = generateElementArray(imageUrls, fallStrategy, expandStrategy);
  const animationPromises = items.map((item, index) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        item.fall((i: Item) => {
          fallFinishedAction();
          resolve();
        });
      }, index * 500);
    });
  });
  await Promise.all(animationPromises);
  finishedAction();
};

const generateElementArray = (srcs: string[], fallStrategy: IFallItem, expandStrategy: IExpandItem) => {
  const imageElementArray: Item[] = [];
  srcs.forEach((src) => {
    const item = new Item(src, 0, 0, undefined, fallStrategy, expandStrategy);
    imageElementArray.push(item);
  });
  return imageElementArray;
};

export default collect;
