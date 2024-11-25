import collect from "./anim/collect/collect";
import create from "./anim/create/create";
import { LinearReduceWarehouse } from "./object/warehouse/reduceWarehouse/LinearReduceWarehouse";
import { PopSwellWarehouse } from "./object/warehouse/swellWarehouse/PopSwellWarehouse";
import { Warehouse } from "./object/warehouse/Warehouse";
import { DictionaryImageConverter } from "./processing/imageConverter/DictionaryImageConverter";
import { IImageConverter } from "./processing/imageConverter/IImageConverter";
import { IImageGenerator } from "./processing/imageGenerator/IImageGenerator";
import { RandomImageGenerator } from "./processing/imageGenerator/RandomImageGenerator";

const opening = async () => {
  const warehouse: Warehouse = new Warehouse("script-opningWarehouse", new PopSwellWarehouse(), new LinearReduceWarehouse());
  const imageGenerator: IImageGenerator = new RandomImageGenerator();
  const imageConverter: IImageConverter = new DictionaryImageConverter();
  const collectResources: string[] = imageGenerator.generateNewImgs(12);
  const createResources: string[] = imageConverter.img2newImg(collectResources);
  await new Promise<void>((resolve) => {
    collect(collectResources, warehouse.swell, resolve);
  });
  await new Promise<void>((resolve) => {
    create(createResources, resolve);
  });
};

export default opening;
