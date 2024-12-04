import GlobalFunction from "../../../util/GlobalFunction";

export default class FactoryAssetManager {
  private static instance: FactoryAssetManager;
  public readonly container: HTMLElement;
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.container = i.getElementByCheckedId<HTMLElement>("script-conveyerFlow") as HTMLElement;
  }
  public static getInstance = (): FactoryAssetManager => {
    if (!this.instance) this.instance = new FactoryAssetManager();
    return this.instance;
  };
}
