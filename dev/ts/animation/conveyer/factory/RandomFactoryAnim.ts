import { IFactoryAnim } from "./IFactoryAnim";
import GlobalAssetManager from "../../../util/GlobalAssetManager";
import gsap from "gsap";
import FactoryAssetManager from "./FactoryAssetManager";
export default class RandomFactoryAnim implements IFactoryAnim {
  private manager: FactoryAssetManager;
  private clothesArray: (Clothes | null)[] = [];
  private interval = 100;
  constructor() {
    this.manager = FactoryAssetManager.getInstance();
  }
  public startAnim: (duration: number) => void = async (duration: number) => {
    const imageSrcs: string[] = GlobalAssetManager.getInstance().getUrlCreatePngs() || null;
    setTimeout(() => this.intervalFunction(imageSrcs, duration), this.interval);
  };
  public stopAnim = () => {};
  intervalFunction = async (imageSrcs: string[], duration: number) => {
    await this.randomGenerate(imageSrcs, duration); // 非同期関数を待ってから次へ進む
    setTimeout(() => this.intervalFunction(imageSrcs, duration), this.interval); // 次のタイマーをセット
  };
  private randomGenerate = async (imageSrcs: string[], duration: number) => {
    const randomSrcIndex = Math.floor((Math.random() * 100) % imageSrcs.length);
    const clothes: Clothes = new Clothes(this.manager.container, imageSrcs[randomSrcIndex]);
    await new Promise<void>((resolve) => {
      this.randomPosition(resolve, clothes); // この処理が終わるまで待つ
    });
    this.enrollAnimation(clothes, duration);
  };
  private randomPosition = async (resolve: (value: void | PromiseLike<void>) => void, clothes: Clothes) => {
    const clothesWidth = clothes.htmlElement.offsetWidth;
    const parentWidth = this.manager.container.offsetWidth;
    const randomX = Math.random() * (parentWidth - clothesWidth) + clothesWidth / 2;
    clothes.htmlElement.style.left = `${randomX}px`;
    clothes.htmlElement.style.bottom = `${0}px`;
    setTimeout(() => {
      if (!this.hitCheck(clothes)) {
        return this.randomPosition(resolve, clothes);
      } else {
        return resolve();
      }
    }, 100);
  };

  private enrollAnimation = (clothes: Clothes, duration: number) => {
    const clothesHeight = clothes.htmlElement.offsetHeight;
    const parentHeight = this.manager.container.offsetHeight;
    this.clothesArray.push(clothes);
    const index = this.clothesArray.length - 1;
    gsap.fromTo(
      clothes.htmlElement,
      {
        bottom: `${0}px`,
      },
      {
        bottom: `${parentHeight + 200}px`,
        duration: duration,
        ease: "linear",
        onUpdate: () => {
          const bottom = parseFloat(gsap.getProperty(clothes.htmlElement, "bottom") as string);
          if (bottom > 500) this.clothesArray[index] = null;
        },
        onComplete: () => {
          clothes.htmlElement.remove();
          // this.clothesArray.splice(index, 1);
        },
      }
    );
  };

  private hitCheck = (clothes: Clothes) => {
    const element = clothes.htmlElement;
    for (let i = 0; i < this.clothesArray.length; i++) {
      if (clothes === this.clothesArray[i]) continue;
      const compareElement = this.clothesArray[i]?.htmlElement;
      if (!compareElement) continue;
      // x軸でのチェック
      const elementHalfWidth = element.offsetWidth / 2;
      const elementHalfHeight = element.offsetHeight / 2;
      const compareElementHalfWidth = compareElement.offsetWidth / 2;
      const compareElementHalfHeight = compareElement.offsetHeight / 2;
      const xCheck =
        element.offsetLeft + elementHalfWidth < compareElement.offsetLeft - compareElementHalfWidth ||
        element.offsetLeft - elementHalfWidth > compareElement.offsetLeft + compareElementHalfWidth;
      // y軸でのチェック
      const yCheck =
        element.offsetTop + elementHalfHeight < compareElement.offsetTop - compareElementHalfHeight ||
        element.offsetTop - elementHalfHeight > compareElement.offsetTop + compareElementHalfHeight;
      if (!xCheck && !yCheck) return false;
    }
    // 衝突しなければ true
    return true;
  };
}

class Clothes {
  public readonly htmlElement: HTMLImageElement;
  private width: number;
  private height: number;
  constructor(parent: HTMLElement, src: string) {
    const element = document.createElement("img");
    element.src = src;
    element.className = "conveyer-3d__clothes-item";
    const randomZ = Math.random() * 20 + 10;
    element.style.transform = `translate3d(-50%,-50%, ${randomZ}px)`;
    this.htmlElement = element;
    parent.appendChild(this.htmlElement);
  }
}
