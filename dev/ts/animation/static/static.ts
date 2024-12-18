import InfinityRotation from "./rotation/InfinityRotation";
import Rotation from "./rotation/Rotation";
import StaticAssetManager from "./StaticAssetManager";
import ISwipe from "./swipe/ISwipe";
import SingleSwipe from "./swipe/SingleSwipe";
import ITap from "./tap/ITap";
import LinearTap from "./tap/LinearTap";

export default class staticAnim {
  private rotation: Rotation;
  private swipe: ISwipe;
  private tap: ITap;
  constructor() {
    this.rotation = new Rotation();
    this.swipe = new SingleSwipe(this.rotation);
    this.tap = new LinearTap(this.rotation);
  }

  public staticAnim = () => {
    this.init();
    this.swipe.swipe();
    this.tap.tap();
  };
  public init = () => {
    this.rotation.angleChange(this.rotation.getAngle());
    this.rotation.updateStyle();
  };
  public pcReset = () => {
    StaticAssetManager.getInstance().pcInitCards();
    this.swipe.reset();
    this.tap.reset();
  };
  public spReset = () => {
    StaticAssetManager.getInstance().pcInitCards();
  };
}
