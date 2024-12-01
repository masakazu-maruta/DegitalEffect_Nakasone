import { IFactoryAnim } from "./anim/IFactoryAnim";
import RandomFactoryAnim from "./anim/RandomFactoryAnim";

export default class Factory {
  constructor() {
    this.factoryStrategy = new RandomFactoryAnim();
  }
  private readonly factoryStrategy: IFactoryAnim;
  public factory = (duration: number) => {
    this.factoryStrategy.factory(duration);
  };
}
