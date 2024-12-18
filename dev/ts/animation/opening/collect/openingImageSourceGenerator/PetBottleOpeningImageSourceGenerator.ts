import GlobalAssetManager from "../../../../util/GlobalAssetManager";
import IOpeningImageSourceGenerator from "./IOpeningImageSourceGenerator";

export default class PetBottleOpeningImageSourceGenerator implements IOpeningImageSourceGenerator {
  public generate = (n: number): string[] => {
    const images: string[] = GlobalAssetManager.getInstance().getUrlCreatePngs();
    const imageLength = images.length;
    const returnImageUrlArray: string[] = [];
    for (let i = 0; i < n; i++) {
      returnImageUrlArray.push(images[imageLength - 1]);
    }
    return returnImageUrlArray;
  };
}
2;
