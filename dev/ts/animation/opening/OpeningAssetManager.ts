import GlobalFunction from "../../util/GlobalFunction";

export default class OpeningAssetManager {
  private static instance: OpeningAssetManager;
  public readonly createContainer: HTMLElement;
  public readonly collectContainer: HTMLElement;
  public readonly warehouseElement: HTMLImageElement;
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.createContainer = i.getElementByCheckedId("script__openingCreateBox");
    this.collectContainer = i.getElementByCheckedId("script__openingCollectBox");
    this.warehouseElement = i.getElementByCheckedId("script-openingWarehouse");
  }
  public static getInstance = (): OpeningAssetManager => {
    if (!this.instance) this.instance = new OpeningAssetManager();
    return this.instance;
  };
}
