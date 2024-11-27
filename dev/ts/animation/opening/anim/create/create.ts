import { IExpandItem } from "../../object/item/expandItem/IExpandItem";
import { LinearExpandItem } from "../../object/item/expandItem/LinearExpandItem";
import { IFallItem } from "../../object/item/fallItem/IFallItem";
import { LinearFallItem } from "../../object/item/fallItem/LinearFallItem";
import { Item } from "../../object/item/Item";

const create = async (imageUrls: string[], finishedAction: () => void) => {
  const expandStrategy: IExpandItem = new LinearExpandItem();
  const fallStrategy: IFallItem = new LinearFallItem();
  const items: Item[] = generateElementArray(imageUrls, fallStrategy, expandStrategy);
  console.log(imageUrls);
  const animationPromises = items.map((item, index) => {
    return new Promise<void>((resolve) => {
      item.expand((i: Item) => resolve());
    });
  });
  await Promise.all(animationPromises);
  finishedAction();
};

const generateElementArray = (srcs: string[], fallStrategy: IFallItem, expandStrategy: IExpandItem) => {
  const imageElementArray: Item[] = [];
  srcs.forEach((src) => {
    const item = new Item(src, 0, 0, fallStrategy, expandStrategy, "script-openingParent");
    imageElementArray.push(item);
  });
  return imageElementArray;
};

export default create;
