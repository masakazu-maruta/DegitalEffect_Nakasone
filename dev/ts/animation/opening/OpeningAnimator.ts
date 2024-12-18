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
import DividedOpeningExpandAnimator from "./create/openingExpandAnimator/DividedOpeningExpandAnimator";
import PetBottleOpeningImageSourceConverter from "./create/openingImageSourceConverter/PetbottleOpeningImageSouceConverter";
import PetBottleOpeningImageSourceGenerator from "./collect/openingImageSourceGenerator/PetBottleOpeningImageSourceGenerator";
import NotPetDicOpeningImageSourceConverter from "./create/openingImageSourceConverter/NotPetDicOpeningImageSourceConverter";

export default class OpeningAnimator {
  private manager: OpeningAssetManager;
  private collectClothesArray: OpeningClothes[] = [];
  private createClothesArray: OpeningClothes[] = [];
  private createPetBottleArray: OpeningClothes[] = [];
  private createPaperArray: OpeningPaper[] = [];
  private collectImageSources: string[] = [];
  private createImageSources: string[] = [];
  private imageSourceGenerator: IOpeningImageSourceGenerator;
  private petSourceGenerator: IOpeningImageSourceGenerator;
  private imageSourceConverter: IOpeningImageSourceConverter;
  private fallAnimator: IOpeningFallAnimator;
  private clothesExpandAnimator: IOpeningExpandAnimator;
  private petBottleExpandAnimator: IOpeningExpandAnimator;
  private paperExpandAnimator: IOpeningExpandAnimator;
  private swellAnimator: IOpeningSwellAnimator;
  private reduceAnimator: IOpeningReduceAnimator;
  private numberOfClothes = 0;
  constructor() {
    this.manager = OpeningAssetManager.getInstance();
    this.imageSourceGenerator = new RandomOpeningImageSourceGenerator();
    this.petSourceGenerator = new PetBottleOpeningImageSourceGenerator();
    this.imageSourceConverter = new NotPetDicOpeningImageSourceConverter();
    // this.imageSourceConverter = new PetBottleOpeningImageSourceConverter();
    this.fallAnimator = new ExpoScaleOpeningFallAnimator();
    // this.clothesExpandAnimator = new LinearOpeningExpandAnimator();
    this.clothesExpandAnimator = new DividedOpeningExpandAnimator();
    this.petBottleExpandAnimator = new LinearOpeningExpandAnimator();
    this.paperExpandAnimator = new OutsideOpeningExpandAnimator();
    this.swellAnimator = new SmoothSwellWarehouse();
    // this.swellAnimator = new PopSwellWarehouse();
    this.reduceAnimator = new LinearOpeningReduceAnimator();
    this.numberOfClothes = 36;
  }

  public startAnim = async () => {
    await this.collectAnim();
    await new Promise<void>((resolve) => setTimeout(resolve, 300));
    await this.createAnim();
  };

  private collectAnim = async () => {
    this.collectImageSources = this.imageSourceGenerator.generate(this.numberOfClothes);
    this.collectClothesArray = this.generateClothes(this.collectImageSources, this.manager.collectContainer);
    const animationPromises = this.collectClothesArray.map((item, index) => {
      return new Promise<void>((resolve) => {
        setTimeout(async () => {
          await this.fallAnimator.startAnim(item.element, this.manager.warehouseElement, 0.75);
          // if (index % 16 === 0) this.swellAnimator.startAnim(this.manager.warehouseElement, 0.25,1.1);
          item.element.remove();
          resolve();
        }, index * 15);
      });
    });
    const warehouseAnimationPromise = new Promise<void>(async (resolve) => {
      await new Promise<void>((resolve) => setTimeout(resolve, 700));
      await this.swellAnimator.startAnim(this.manager.warehouseElement, this.collectClothesArray.length * 0.015 + 0.25, 2);
      resolve();
    });
    await Promise.all([animationPromises, warehouseAnimationPromise]);
  };

  private createAnim = async () => {
    this.createImageSources = this.imageSourceConverter.convert(this.collectImageSources);
    this.createClothesArray = this.generateClothes(this.createImageSources, this.manager.createContainer);
    this.createPetBottleArray = this.generateClothes(
      this.petSourceGenerator.generate(this.numberOfClothes / 10),
      this.manager.createContainer
    );
    this.createPaperArray = this.generatePapers(this.numberOfClothes * 2, this.manager.createContainer);
    await Promise.all([
      this.reduceAnimator.reduce(this.manager.warehouseElement, 1, 2, 0.25),
      ...this.createClothesArray.map((item, index) => {
        return this.clothesExpandAnimator.expand(item.element, 7, index);
      }),
      ...this.createPaperArray.map((item, index) => {
        return this.paperExpandAnimator.expand(item.element, 7, index);
      }),
      ...this.createPetBottleArray.map((item, index) => {
        return this.petBottleExpandAnimator.expand(item.element, 7, index);
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
