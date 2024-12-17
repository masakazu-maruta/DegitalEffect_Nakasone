import GlobalAssetManager from "../../../../util/GlobalAssetManager";
import IOpeningImageSourceGenerator from "./IOpeningImageSourceGenerator";

export default class RandomOpeningImageSourceGenerator implements IOpeningImageSourceGenerator {
  public generate = (n: number): string[] => {
    const images: string[] = GlobalAssetManager.getInstance().getUrlCollectPngs();
    const imageLength = images.length;
    const returnImageUrlArray: string[] = [];
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * imageLength);
      returnImageUrlArray.push(images[index]);
    }
    return returnImageUrlArray;
  };
}
2;
