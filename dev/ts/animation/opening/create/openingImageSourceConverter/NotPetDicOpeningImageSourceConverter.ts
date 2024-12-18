import GlobalAssetManager from "../../../../util/GlobalAssetManager";
import IOpeningImageSourceConverter from "./IOpeningImageSourceConverter";
interface ImageDictionary {
  [key: string]: string;
}
export default class NotPetDicOpeningImageSourceConverter implements IOpeningImageSourceConverter {
  private map: ImageDictionary;
  public convert = (collectImgStrs: string[]): string[] => {
    const createImgStrs = GlobalAssetManager.getInstance().getUrlCreatePngs();
    this.createMap(collectImgStrs, createImgStrs);
    const returnImgStrs: string[] = this.convertImages(collectImgStrs);
    return returnImgStrs;
  };

  private createMap = (keyStrs: string[], valStrs: string[]) => {
    this.map = {};
    const keyLength = keyStrs.length;
    const valLength = valStrs.length - 3;
    for (let i = 0; i < keyLength; i++) {
      this.map[keyStrs[i]] = valStrs[i % valLength];
    }
  };

  private convertImages = (keyStrs: string[]) => {
    const imgStrs: string[] = [];
    for (let i = 0; i < keyStrs.length; i++) {
      imgStrs.push(this.map[keyStrs[i]]);
    }
    return imgStrs;
  };
}
