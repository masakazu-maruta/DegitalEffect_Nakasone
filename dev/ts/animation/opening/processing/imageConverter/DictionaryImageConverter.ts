import GlobalAssetManager from "../../../../util/GlobalAssetManager";
import { IImageConverter } from "./IImageConverter";
interface ImageDictionary {
  [key: string]: string;
}
export class DictionaryImageConverter implements IImageConverter {
  private map: ImageDictionary;
  public img2newImg = (collectImgStrs: string[]): string[] => {
    const createImgStrs = GlobalAssetManager.getInstance().getUrlCreatePngs();
    this.createMap(collectImgStrs, createImgStrs);
    const returnImgStrs: string[] = this.convertImages(collectImgStrs);
    return returnImgStrs;
  };

  private createMap = (keyStrs: string[], valStrs: string[]) => {
    this.map = {};
    const keyLength = keyStrs.length;
    const valLength = valStrs.length;
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
