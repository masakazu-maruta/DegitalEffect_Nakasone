import GlobalFunction from "../../util/GlobalFunction";

export default class StaticAssetManager {
  private static instance: StaticAssetManager;
  public readonly container: HTMLElement;
  public readonly cards: HTMLElement[] = [];
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.container = i.getElementByCheckedId("script__staticCardBox");
    document.querySelectorAll(".static-cards__item").forEach((element) => {
      if (!element || !(element instanceof HTMLElement)) throw new Error("card-itemが見つかりません");
      this.cards.push(element);
    });
  }
  public static getInstance = (): StaticAssetManager => {
    if (!this.instance) this.instance = new StaticAssetManager();
    return this.instance;
  };
}
