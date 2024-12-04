const opening = async () => {
  const items: Item[] = generateElementArray(imageUrls);
  srcs.forEach((src) => {
    const item = new Clothes(src);
    imageElementArray.push(item);
  });
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
export default opening;
