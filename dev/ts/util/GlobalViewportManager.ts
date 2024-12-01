export class GlobalViewportManager {
  private static instance: GlobalViewportManager;
  private constructor() {
    document.addEventListener("resize", () => {
      GlobalViewportManager.viewportWidth = window.innerWidth;
      GlobalViewportManager.viewportHeight = window.innerHeight;
    });
  }
  private static viewportWidth = window.innerWidth;
  private static viewportHeight = window.innerHeight;
  public static getViewPortWidth = () => {
    return this.viewportWidth;
  };
  public static getViewPortHeight = () => {
    return this.viewportHeight;
  };
}
