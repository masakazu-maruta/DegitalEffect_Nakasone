export class GlobalAssetManager {
  private static instance: GlobalAssetManager;
  private imageUrlPrefix: string = "assets/images/";
  private constructor() {}
  public static getInstance = (): GlobalAssetManager => {
    if (!GlobalAssetManager.instance) {
      GlobalAssetManager.instance = new GlobalAssetManager();
    }
    return GlobalAssetManager.instance;
  };

  public getUrlCollectPngs = (): string[] => {
    const itemUrlPrefix: string = "items/collect/";
    const imageUrlArray: string[] = [
      "clothes_1.png",
      "clothes_2.png",
      "clothes_3.png",
      "clothes_4.png",
      "clothes_5.png",
      "clothes_6.png",
      "clothes_7.png",
      "clothes_8.png",
    ];
    return this.local2globalUrl(imageUrlArray, itemUrlPrefix);
  };
  public getUrlCreatePngs = (): string[] => {
    const itemUrlPrefix: string = "items/create/";
    const imageUrlArray: string[] = [
      "clothes_1.png",
      "clothes_2.png",
      "clothes_3.png",
      "clothes_4.png",
      "clothes_5.png",
      "clothes_6.png",
      "clothes_7.png",
      "clothes_8.png",
      "clothes_9.png",
      "pet.png",
    ];
    return this.local2globalUrl(imageUrlArray, itemUrlPrefix);
  };
  public getUrlWarehousePng = (): string => {
    const itemUrlPrefix: string = "items/warehouse/";
    const imageUrl = "warehouse.png";
    return this.imageUrlPrefix + itemUrlPrefix + imageUrl;
  };
  public getUrlWarehouseWebp = (): string => {
    const itemUrlPrefix: string = "items/warehouse/";
    const imageUrl = "warehouse.webp";
    return this.imageUrlPrefix + itemUrlPrefix + imageUrl;
  };
  private local2globalUrl = (array: string[], prefix: string) => {
    const imageUrlArray: string[] = [];
    array.forEach((url) => {
      imageUrlArray.push(this.imageUrlPrefix + prefix + url);
    });
    return imageUrlArray;
  };
}
