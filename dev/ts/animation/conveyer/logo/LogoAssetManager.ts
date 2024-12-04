import GlobalFunction from "../../../util/GlobalFunction";

export default class LogoAssetManager {
  private static instance: LogoAssetManager;
  public readonly container: HTMLElement;
  public readonly icons: HTMLElement[] = [];
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.container = i.getElementByCheckedId("script-logoContainer");
    document.querySelectorAll(".conveyer-ui__logo-icons-item").forEach((element) => {
      if (!element || !(element instanceof HTMLElement)) throw new Error("icon-itemが見つかりません");
      this.icons.push(element);
    });
  }
  public static getInstance = (): LogoAssetManager => {
    if (!this.instance) this.instance = new LogoAssetManager();
    return this.instance;
  };
}
