import GlobalFunction from "../util/GlobalFunction";

export default class ContainerAssetManager {
  private static instance: ContainerAssetManager;
  public readonly openingContainer: HTMLElement;
  public readonly conveyerContainer: HTMLElement;
  public readonly staticContainer: HTMLElement;
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.openingContainer = i.getElementByCheckedId("script-openingParent");
    this.conveyerContainer = i.getElementByCheckedId("script-conveyerParent");
    // this.staticContainer = i.getElementByCheckedId("script-staticParent");
  }
  public static getInstance = (): ContainerAssetManager => {
    if (!this.instance) this.instance = new ContainerAssetManager();
    return this.instance;
  };
}
