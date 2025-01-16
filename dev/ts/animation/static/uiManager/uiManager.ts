import { GlobalViewportManager } from "../../../util/GlobalViewportManager";
import StaticAssetManager from "../StaticAssetManager";
interface Event {
  name: string;
  target: HTMLElement | Window;
  action: (...e) => void;
}
export default class UIManager {
  private swipeUI: HTMLElement;
  private manager: StaticAssetManager;
  private eventListeners: Event[] = [];
  private animationClassName: string = "--animation";
  private startX = 0;
  private endX = 0;
  private swipeDistance = 50;
  constructor() {
    this.manager = StaticAssetManager.getInstance();
    this.swipeUI = this.manager.swipeUI;
  }

  start: () => void = () => {
    this.manager.swipeUI.classList.add(this.animationClassName);
    const startHandle = (e) => {
      this.startX = e.touches[0].pageX;
    };
    const moveHandle = (e) => {};
    const endHandle = (e) => {
      this.endX = e.changedTouches[0].pageX;
      const moveX = this.endX - this.startX;
      if (Math.abs(moveX) > this.swipeDistance) {
        this.manager.swipeUI.classList.remove(this.animationClassName);
      }
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
}
