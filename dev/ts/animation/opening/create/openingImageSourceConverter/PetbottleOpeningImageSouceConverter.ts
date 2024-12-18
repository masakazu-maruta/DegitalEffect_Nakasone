import GlobalAssetManager from "../../../../util/GlobalAssetManager";
import IOpeningImageSourceConverter from "./IOpeningImageSourceConverter";

export default class PetBottleOpeningImageSourceConverter implements IOpeningImageSourceConverter {
  public convert = (collectImgStrs: string[]): string[] => {
    const createImgStrs = GlobalAssetManager.getInstance().getUrlCreatePngs();
    return this.create(collectImgStrs, createImgStrs);
  };

  private create = (collectImgStrs: string[], createImgStrs: string[]) => {
    const array: string[] = [];
    const collectLength = collectImgStrs.length;
    const createLength = createImgStrs.length;
    for (let i = 0; i < collectLength; i++) {
      array.push(createImgStrs[createLength - 1]);
    }
    return array;
  };
}
