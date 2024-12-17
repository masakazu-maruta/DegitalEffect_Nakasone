import StaticAssetManager from "../StaticAssetManager";
export default class Rotation {
  private manager: StaticAssetManager;
  private currentAngle = 0;
  private busy = false;
  private rx = 240;
  private ry = 50;
  private rz = 240;
  constructor() {
    this.manager = StaticAssetManager.getInstance();
  }

  public angleChange = (angle: number) => {
    const length = this.manager.cards.length;
    this.manager.cards.forEach((element, index) => {
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      const additionalRotate = (index * Math.PI * 2) / length;
      const _angle = additionalRotate + angle;
      const nextX = this.rx * Math.sin(_angle);
      const nextY = this.ry * -(Math.cos(_angle) + 1);
      const nextZ = this.rz * -(Math.cos(_angle) + 1);
      element.style.transform = `translate3d(${nextX - elementWidth / 2}px, ${nextY - elementHeight / 2}px, ${nextZ}px)`;
    });
  };

  public angleAnimation = async (startAngle: number, goalAngle: number, sec: number, isBusy: boolean = true) => {
    this.busy = isBusy;
    if (isBusy) this.inActiveStyle();
    await new Promise<void>((resolve) => {
      const finishAction = () => {
        if (isBusy) {
          this.angleChange(goalAngle);
          this.setAngle(goalAngle);
          this.updateStyle();
        }
        resolve();
      };
      requestAnimationFrame(() => this._angleAnimation(startAngle, goalAngle, sec, performance.now(), finishAction));
    });
    this.busy = false;
  };

  private _angleAnimation = (startAngle: number, goalAngle: number, sec: number, firstTime: number, resolve) => {
    const currentTime = performance.now();
    const elapsedTime = (currentTime - firstTime) / 1000;
    if (elapsedTime > sec) {
      resolve();
      return;
    }
    const ratio = elapsedTime / sec;
    const nextAngle = startAngle * (1 - ratio) + goalAngle * ratio;
    this.angleChange(nextAngle);
    return requestAnimationFrame(() => this._angleAnimation(startAngle, goalAngle, sec, firstTime, resolve));
  };
  public getAngle = () => {
    return this.currentAngle;
  };
  public setAngle = (angle: number) => {
    const max = Math.PI * 2;
    while (angle < 0) angle = angle + max;
    this.currentAngle = angle % max;
  };
  public updateStyle = () => {
    const styledIndex = this.getCurrentIndex();
    this.manager.cards.forEach((element, index) => {
      if (index === styledIndex) {
        element.classList.add("--choose");
        element.setAttribute("href", "/aaa");
      } else {
        element.classList.remove("--choose");
        element.removeAttribute("href");
      }
    });
  };
  public inActiveStyle = () => {
    this.manager.cards.forEach((element) => {
      element.classList.remove("--choose");
      element.removeAttribute("href");
    });
  };
  public getCurrentIndex = () => {
    const length = this.manager.cards.length;
    const angle = -(Math.PI * 2) / length;
    let number = (this.currentAngle / angle) % length;
    if (number < 0) {
      number = length + number;
    }
    number = (number + length / 2) % length;
    return number;
  };
  public getBusy = (): boolean => {
    return this.busy;
  };
  public resetStyle = () => {
    this.manager.cards.forEach((element) => {
      element.style.transform = "";
      element.classList.remove("--choose");
      element.removeAttribute("href");
    });
  };
}
