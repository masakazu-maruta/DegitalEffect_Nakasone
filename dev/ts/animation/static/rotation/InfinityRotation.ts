import StaticAssetManager from "../StaticAssetManager";
import IRotation from "./IRotation";

export default class InfinityRotation implements IRotation {
  private manager: StaticAssetManager;
  private rx = 240;
  private ry = 50;
  private rz = 240;
  private duration = 5;
  private currentIndex = 0;
  constructor() {
    this.manager = StaticAssetManager.getInstance();
  }
  rotateAnim: () => void = () => {
    const firstTime = performance.now();
    requestAnimationFrame(() => this.anim(firstTime));
  };

  private anim = (firstTime: number) => {
    const currentTime: number = performance.now();
    const elapsedTime = ((currentTime - firstTime) / 1000) % this.duration;
    const length = this.manager.cards.length;
    this.manager.cards.forEach((element, index) => {
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      const additionalRotate = (index * Math.PI * 2) / length;
      const angle = this.getCurrentAnimRatio(elapsedTime, additionalRotate);
      const nextX = this.rx * Math.sin(angle);
      const nextY = this.ry * -(Math.cos(angle) + 1);
      const nextZ = this.rz * -(Math.cos(angle) + 1);
      element.style.transform = `translate3d(${nextX - elementWidth / 2}px, ${nextY - elementHeight / 2}px, ${nextZ}px)`;
    });
    return requestAnimationFrame(() => this.anim(firstTime));
  };

  private getCurrentAnimRatio = (elapsedTime: number, rotation: number) => {
    return (elapsedTime / this.duration) * Math.PI * 2 + rotation;
  };
}

// &:nth-child(1) {
//   top: 60%;
//   transform: translate3d(-50%, -50%, 0px);
// }
// &:nth-child(2) {
//   left: -12.5%;
//   transform: translate3d(-50%, -50%, -120px);
// }
// &:nth-child(3) {
//   left: 112.5%;
//   transform: translate3d(-50%, -50%, -120px);
// }
// &:nth-child(4) {
//   top: 30%;
//   transform: translate3d(-50%, -50%, -240px);
// }
