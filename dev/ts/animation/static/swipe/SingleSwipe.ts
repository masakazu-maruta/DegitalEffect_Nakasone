import { GlobalViewportManager } from "../../../util/GlobalViewportManager";
import Rotation from "../rotation/Rotation";
import StaticAssetManager from "../StaticAssetManager";
import ISwipe from "./ISwipe";

export default class SingleSwipe implements ISwipe {
  private manager: StaticAssetManager;
  private rotation: Rotation;
  private startX: number = 0;
  private endX: number = 0;
  private minimumDistance = 100;
  private swipeAnimationTime = 0.25;

  constructor(rotation: Rotation) {
    this.manager = StaticAssetManager.getInstance();
    this.rotation = rotation;
    this.rotation.angleChange(0);
    window.addEventListener("touchstart", (e) => {
      if (this.rotation.getBusy()) return;
      // e.preventDefault();
      this.touchStart(e);
    });
    window.addEventListener("touchmove", (e) => {
      if (this.rotation.getBusy()) return;
      // e.preventDefault();
      this.touchMove(e);
    });
    window.addEventListener("touchend", (e) => {
      if (this.rotation.getBusy()) return;
      // e.preventDefault();
      this.touchEnd(e);
    });
  }
  swipe: () => void = () => {};

  private touchStart = (e: TouchEvent) => {
    this.startX = e.touches[0].pageX;
  };
  private touchMove = (e: TouchEvent) => {
    this.endX = e.changedTouches[0].pageX;
    const moveXRatio = (this.endX - this.startX) / GlobalViewportManager.getViewPortWidth();
    const moveAngle = this.rotation.getAngle() + this.getXRatioToAngle(moveXRatio);
    this.rotation.angleChange(moveAngle);
  };
  private touchEnd = async (e: TouchEvent) => {
    this.endX = e.changedTouches[0].pageX;
    const moveX = this.endX - this.startX;
    const moveXRatio = moveX / GlobalViewportManager.getViewPortWidth();
    const moveAngle = this.rotation.getAngle() + this.getXRatioToAngle(moveXRatio);
    if (Math.abs(moveX) < this.minimumDistance) {
      await this.rotation.angleAnimation(moveAngle, this.rotation.getAngle(), this.swipeAnimationTime, false);
      return;
    }
    const vectorX = -Math.abs(moveXRatio) / moveXRatio;
    const nextAngle = this.rotation.getAngle() + (vectorX * (Math.PI * 2)) / this.manager.cards.length;
    await this.rotation.angleAnimation(moveAngle, nextAngle, this.swipeAnimationTime);
  };

  private getXRatioToAngle = (x) => {
    return (x * -Math.PI) / 10;
  };
}
