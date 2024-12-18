import { GlobalViewportManager } from "../../../util/GlobalViewportManager";
import Rotation from "../rotation/Rotation";
import StaticAssetManager from "../StaticAssetManager";
import ISwipe from "./ISwipe";

interface Event {
  name: string;
  target: HTMLElement | Window;
  action: (...e) => void;
}
export default class SingleSwipe implements ISwipe {
  private manager: StaticAssetManager;
  private rotation: Rotation;
  private startX: number = 0;
  private endX: number = 0;
  private minimumDistance = 100;
  private swipeAnimationTime = 0.25;
  private eventListeners: Event[] = [];

  constructor(rotation: Rotation) {
    this.manager = StaticAssetManager.getInstance();
    this.rotation = rotation;
    this.rotation.angleChange(0);
  }
  swipe: () => void = () => {
    const startHandle = (e) => {
      if (this.rotation.getBusy()) return;
      // e.preventDefault();
      this.touchStart(e);
    };
    const moveHandle = (e) => {
      if (this.rotation.getBusy()) return;
      // e.preventDefault();
      this.touchMove(e);
    };

    const endHandle = (e) => {
      if (this.rotation.getBusy()) return;
      // e.preventDefault();
      this.touchEnd(e);
    };
    window.addEventListener("touchstart", startHandle);
    window.addEventListener("touchmove", moveHandle);
    window.addEventListener("touchend", endHandle);
    this.eventListeners.push({ name: "touchstart", target: window, action: startHandle });
    this.eventListeners.push({ name: "touchmove", target: window, action: moveHandle });
    this.eventListeners.push({ name: "touchend", target: window, action: endHandle });
  };
  reset: () => void = () => {
    this.eventListeners.forEach((event, index) => {
      event.target.removeEventListener(event.name, event.action);
    });
  };

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
