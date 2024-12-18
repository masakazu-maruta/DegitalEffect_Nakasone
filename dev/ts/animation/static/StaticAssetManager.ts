import GlobalFunction from "../../util/GlobalFunction";

export default class StaticAssetManager {
  private static instance: StaticAssetManager;
  public readonly container: HTMLElement;
  public readonly cards: HTMLElement[] = [];
  public readonly cardHrefs: string[] = [];
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.container = i.getElementByCheckedId("script__staticCardBox");
    document.querySelectorAll(".static-cards__item").forEach((element) => {
      if (!element || !(element instanceof HTMLElement)) throw new Error("card-itemが見つかりません");
      this.cards.push(element);
      this.cardHrefs.push(element.getAttribute("href") || "");
    });
  }

  public static getInstance = (): StaticAssetManager => {
    if (!this.instance) this.instance = new StaticAssetManager();
    return this.instance;
  };

  public pcInitCards = () => {
    this.cards.forEach((element, index) => {
      element.style.transform = "";
      element.classList.remove("--choose");
      element.setAttribute("href", this.cardHrefs[index]);
    });
  };

  public spInitCards = () => {
    this.cards.forEach((element) => {
      element.removeAttribute("href");
    });
  };
}
