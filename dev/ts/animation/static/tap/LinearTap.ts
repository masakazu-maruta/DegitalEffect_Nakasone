import Rotation from "../rotation/Rotation";
import StaticAssetManager from "../StaticAssetManager";
import ITap from "./ITap";

export default class LinearTap implements ITap {
  private manager: StaticAssetManager;
  private rotation: Rotation;
  private duration: number = 0.25;
  constructor(rotation: Rotation) {
    this.rotation = rotation;
    this.manager = StaticAssetManager.getInstance();
  }
  private getNeedAngle = (nextIndex: number) => {
    const length = this.manager.cards.length;
    const oneAngle = (Math.PI * 2) / length;
    const currentIndex = this.rotation.getCurrentIndex();
    const positiveDifferenceIndex = nextIndex - currentIndex < 0 ? nextIndex + length - currentIndex : nextIndex - currentIndex;
    const negativeDifferenceIndex = currentIndex - nextIndex < 0 ? currentIndex + length - nextIndex : currentIndex - nextIndex;
    console.log(nextIndex);
    if (positiveDifferenceIndex < negativeDifferenceIndex) {
      // console.log(positiveDifferenceIndex);
      return -oneAngle * positiveDifferenceIndex;
    } else {
      // console.log(negativeDifferenceIndex);
      return oneAngle * negativeDifferenceIndex;
    }
  };
  tap: () => void = () => {
    this.manager.cards.forEach((element, index) => {
      element.addEventListener("click", async () => {
        if (this.rotation.getBusy()) return;
        const angle: number = this.getNeedAngle(index);
        if (angle === 0) return;
        await this.rotation.angleAnimation(this.rotation.getAngle(), this.rotation.getAngle() + angle, this.duration);
      });
    });
  };
}
