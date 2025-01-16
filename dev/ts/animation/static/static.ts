import InfinityRotation from "./rotation/InfinityRotation";
import Rotation from "./rotation/Rotation";
import StaticAssetManager from "./StaticAssetManager";
import ISwipe from "./swipe/ISwipe";
import SingleSwipe from "./swipe/SingleSwipe";
import ITap from "./tap/ITap";
import LinearTap from "./tap/LinearTap";
import UIManager from "./uiManager/uiManager";

export default class staticAnim {
  private rotation: Rotation;
  private swipe: ISwipe;
  private tap: ITap;
  private swipeUIManager: UIManager;
  constructor() {
    this.rotation = new Rotation();
    this.swipe = new SingleSwipe(this.rotation);
    this.tap = new LinearTap(this.rotation);
    this.swipeUIManager = new UIManager();
  }

  public staticAnim = () => {
    this.init();
    this.swipe.swipe();
    this.tap.tap();
    this.swipeUIManager.start();
  };
  public init = () => {
    this.rotation.angleChange(this.rotation.getAngle());
    this.rotation.updateStyle();
  };
  public pcReset = () => {
    StaticAssetManager.getInstance().pcInitCards();
    this.swipe.reset();
    this.tap.reset();
    this.swipeUIManager.reset();
  };
  public spReset = () => {
    StaticAssetManager.getInstance().pcInitCards();
  };
}
