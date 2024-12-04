export default class GlobalFunction {
  private static instance: GlobalFunction;
  private constructor() {}
  public static getInstance = (): GlobalFunction => {
    if (!this.instance) this.instance = new GlobalFunction();
    return this.instance;
  };
  public getElementByCheckedId = <T>(id: string) => {
    const element = document.getElementById(id);
    if (!element) throw new Error("elementが見つかりませんでした。");
    return element as T;
  };
}
