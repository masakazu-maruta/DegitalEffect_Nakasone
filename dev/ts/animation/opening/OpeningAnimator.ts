import OpeningClothes from "../../objects/opening/OpeningClothes";
import OpeningPaper from "../../objects/opening/OpeningPaper";
import GlobalAssetManager from "../../util/GlobalAssetManager";
import IOpeningFallAnimator from "./collect/openingFallAnimator/IOpeningFallAnimator";
import LinearOpeningFallAnimator from "./collect/openingFallAnimator/LinearOpeningFallAnimator";
import IOpeningImageSourceGenerator from "./collect/openingImageSourceGenerator/IOpeningImageSourceGenerator";
import RandomOpeningImageSourceGenerator from "./collect/openingImageSourceGenerator/RandomOpeningImageSourceGenerator";
import IOpeningSwellAnimator from "./collect/openingSwellAnimator/IOpeningSwellAnimator";
import IOpeningExpandAnimator from "./create/openingExpandAnimator/IOpeningExpandAnimator";
import DictionaryOpeningImageSourceConverter from "./create/openingImageSourceConverter/DictionaryOpeningImageSourceConverter";
import IOpeningImageSourceConverter from "./create/openingImageSourceConverter/IOpeningImageSourceConverter";
import IOpeningReduceAnimator from "./create/openingReduceAnimator/IOpeningReduceAnimator";
import OpeningAssetManager from "./OpeningAssetManager";
import LinearOpeningExpandAnimator from "./create/openingExpandAnimator/LinearOpeningExpandAnimator";
import PopSwellWarehouse from "./collect/openingSwellAnimator/PopOpeningSwellAnimator";
import LinearOpeningReduceAnimator from "./create/openingReduceAnimator/LinearOpeningReduceAnimator";
import ExpoScaleOpeningFallAnimator from "./collect/openingFallAnimator/ExpoScaleOpeningFallAnimator";
import SmoothSwellWarehouse from "./collect/openingSwellAnimator/SmoothOpeningSwellAnimator";
import OutsideOpeningExpandAnimator from "./create/openingExpandAnimator/OutsideOpeningExpandAnimator";

export default class OpeningAnimator {
  private manager: OpeningAssetManager;
  private collectClothesArray: OpeningClothes[] = [];
  private createClothesArray: OpeningClothes[] = [];
  private createPaperArray: OpeningPaper[] = [];
  private collectImageSources: string[] = [];
  private createImageSources: string[] = [];
  private imageSourceGenerator: IOpeningImageSourceGenerator;
  private imageSourceConverter: IOpeningImageSourceConverter;
  private fallAnimator: IOpeningFallAnimator;
  private clothesExpandAnimator: IOpeningExpandAnimator;
  private paperExpandAnimator: IOpeningExpandAnimator;
  private swellAnimator: IOpeningSwellAnimator;
  private reduceAnimator: IOpeningReduceAnimator;
  constructor() {
    this.manager = OpeningAssetManager.getInstance();
    this.imageSourceGenerator = new RandomOpeningImageSourceGenerator();
    this.imageSourceConverter = new DictionaryOpeningImageSourceConverter();
    this.fallAnimator = new ExpoScaleOpeningFallAnimator();
    this.clothesExpandAnimator = new LinearOpeningExpandAnimator();
    this.paperExpandAnimator = new OutsideOpeningExpandAnimator();
    this.swellAnimator = new SmoothSwellWarehouse();
    this.reduceAnimator = new LinearOpeningReduceAnimator();
  }

  public startAnim = async () => {
    await this.collectAnim();
    await new Promise<void>((resolve) => setTimeout(resolve, 300));
    await this.createAnim();
  };

  private collectAnim = async () => {
    this.collectImageSources = this.imageSourceGenerator.generate(54);
    this.collectClothesArray = this.generateClothes(this.collectImageSources, this.manager.collectContainer);
    const animationPromises = this.collectClothesArray.map((item, index) => {
      return new Promise<void>((resolve) => {
        setTimeout(async () => {
          await this.fallAnimator.startAnim(item.element, this.manager.warehouseElement, 0.75);
          // if (index % 16 === 0) this.swellAnimator.startAnim(this.manager.warehouseElement, 0.25);
          item.element.remove();
          resolve();
        }, index * 15);
      });
    });
    const warehouseAnimationPromise = new Promise<void>(async (resolve) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 500));
      await this.swellAnimator.startAnim(this.manager.warehouseElement, this.collectClothesArray.length * 0.015 + 0.5);
      resolve();
    });
    await Promise.all([animationPromises, warehouseAnimationPromise]);
  };

  private createAnim = async () => {
    this.createImageSources = this.imageSourceConverter.convert(this.collectImageSources);
    this.createClothesArray = this.generateClothes(this.createImageSources, this.manager.createContainer);
    this.createPaperArray = this.generatePapers(12, this.manager.createContainer);
    await Promise.all([
      this.reduceAnimator.reduce(this.manager.warehouseElement, 0.5, 2),
      this.createClothesArray.map((item) => {
        return this.clothesExpandAnimator.expand(item.element, 7);
      }),
      this.createPaperArray.map((item) => {
        return this.paperExpandAnimator.expand(item.element, 7);
      }),
    ]);
  };

  public generateClothes = (srcs: string[], parent: HTMLElement): OpeningClothes[] => {
    const elements: OpeningClothes[] = [];
    srcs.forEach((src) => {
      const item = new OpeningClothes(src);
      parent.appendChild(item.element);
      elements.push(item);
    });
    return elements;
  };

  public generatePapers = (n: number, parent: HTMLElement): OpeningPaper[] => {
    const elements: OpeningPaper[] = [];
    for (let i = 0; i < n; i++) {
      const item = new OpeningPaper();
      parent.appendChild(item.element);
      elements.push(item);
    }
    return elements;
  };
}
