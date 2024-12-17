import { IFactoryAnim } from "./IFactoryAnim";
import GlobalAssetManager from "../../../util/GlobalAssetManager";
import gsap from "gsap";
import FactoryAssetManager from "./FactoryAssetManager";
import ConveyerClothes from "../../../objects/conveyer/ConveyerClothes";
export default class RandomFactoryAnim implements IFactoryAnim {
  private manager: FactoryAssetManager;
  private clothesArray: (ConveyerClothes | null)[] = [];
  private interval = 10;
  constructor() {
    this.manager = FactoryAssetManager.getInstance();
  }
  public startAnim: (duration: number) => void = async (duration: number) => {
    const imageSrcs: string[] = GlobalAssetManager.getInstance().getUrlCreatePngs() || null;
    this.intervalFunction(imageSrcs, duration);
  };
  public stopAnim = () => {};
  intervalFunction = async (imageSrcs: string[], duration: number) => {
    await this.randomGenerate(imageSrcs, duration);
    setTimeout(() => this.intervalFunction(imageSrcs, duration), this.interval);
  };
  private randomGenerate = async (imageSrcs: string[], duration: number) => {
    const randomSrcIndex = Math.floor((Math.random() * 100) % imageSrcs.length);
    const clothes: ConveyerClothes = new ConveyerClothes(imageSrcs[randomSrcIndex]);
    await new Promise<void>((resolve) => {
      this.randomPosition(resolve, clothes); // この処理が終わるまで待つ
    });
    this.enrollAnimation(clothes, duration);
  };
  private randomPosition = async (resolve: (value: void | PromiseLike<void>) => void, clothes: ConveyerClothes) => {
    const randomZ = Math.random() * 20 + 10;
    clothes.element.style.transform = `translate3d(-50%,-50%, ${randomZ}px)`;
    this.manager.container.appendChild(clothes.element);
    const clothesWidth = clothes.element.offsetWidth;
    const parentWidth = this.manager.container.offsetWidth;
    const randomX = Math.random() * (parentWidth * 0.9 - clothesWidth) + clothesWidth / 2 + parentWidth * 0.1;
    clothes.element.style.left = `${randomX}px`;
    clothes.element.style.bottom = `${0}px`;
    setTimeout(() => {
      if (!this.hitCheck(clothes)) {
        return this.randomPosition(resolve, clothes);
      } else {
        return resolve();
      }
    }, 100);
  };

  private enrollAnimation = (clothes: ConveyerClothes, duration: number) => {
    const clothesHeight = clothes.element.offsetHeight;
    const parentHeight = this.manager.container.offsetHeight;
    this.clothesArray.push(clothes);
    const index = this.clothesArray.length - 1;
    gsap.fromTo(
      clothes.element,
      {
        bottom: `${0}px`,
      },
      {
        bottom: `${parentHeight + 300}px`,
        duration: duration,
        ease: "linear",
        onUpdate: () => {
          const bottom = parseFloat(gsap.getProperty(clothes.element, "bottom") as string);
          if (bottom > 500) this.clothesArray[index] = null;
        },
        onComplete: () => {
          clothes.element.remove();
          // this.clothesArray.splice(index, 1);
        },
      }
    );
  };

  private hitCheck = (clothes: ConveyerClothes) => {
    const element = clothes.element;
    for (let i = 0; i < this.clothesArray.length; i++) {
      if (clothes === this.clothesArray[i]) continue;
      const compareElement = this.clothesArray[i]?.element;
      if (!compareElement) continue;
      // x軸でのチェック
      const elementHalfWidth = element.offsetWidth / 2 + 5;
      const elementHalfHeight = element.offsetHeight / 2 + 5;
      const compareElementHalfWidth = compareElement.offsetWidth / 2 + 5;
      const compareElementHalfHeight = compareElement.offsetHeight / 2 + 5;
      const xCheck = element.offsetLeft + elementHalfWidth < compareElement.offsetLeft - compareElementHalfWidth || element.offsetLeft - elementHalfWidth > compareElement.offsetLeft + compareElementHalfWidth;
      // y軸でのチェック
      const yCheck = element.offsetTop + elementHalfHeight < compareElement.offsetTop - compareElementHalfHeight || element.offsetTop - elementHalfHeight > compareElement.offsetTop + compareElementHalfHeight;
      if (!xCheck && !yCheck) return false;
    }
    // 衝突しなければ true
    return true;
  };
}
