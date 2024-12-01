import collect from "./anim/collect/collect";
import create from "./anim/create/create";
import { LinearReduceWarehouse } from "./object/warehouse/reduceWarehouse/LinearReduceWarehouse";
import { PopSwellWarehouse } from "./object/warehouse/swellWarehouse/PopSwellWarehouse";
import { Warehouse } from "./object/warehouse/Warehouse";
import { DictionaryImageConverter } from "./processing/imageConverter/DictionaryImageConverter";
import { IImageConverter } from "./processing/imageConverter/IImageConverter";
import { IImageGenerator } from "./processing/imageGenerator/IImageGenerator";
import { RandomImageGenerator } from "./processing/imageGenerator/RandomImageGenerator";
import gsap from "gsap";

const opening = async () => {
  const imageGenerator: IImageGenerator = new RandomImageGenerator();
  const imageConverter: IImageConverter = new DictionaryImageConverter();
  const collectResources: string[] = await imageGenerator.generateNewImgs(26);
  const createResources: string[] = await imageConverter.img2newImg(collectResources);
  const warehouse: Warehouse = new Warehouse("script-openingWarehouse", new PopSwellWarehouse(), new LinearReduceWarehouse());
  await collect(collectResources, warehouse, () => {});
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  await create(createResources, warehouse, () => {});
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      const container = document.getElementById("script-openingParent");
      if (!container) return;
      gsap.fromTo(
        container,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            container.remove();
            resolve();
          },
        }
      );
    }, 5000)
  );
};
export default opening;
