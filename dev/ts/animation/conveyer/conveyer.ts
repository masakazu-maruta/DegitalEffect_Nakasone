import { IFrameAnim } from "./frame/IFrameAnim";
import SimpleFrameAnim from "./frame/SimpleFrameAnim";
import SimpleLogoAnim from "./logo/SimpleLogoAnim";
import { ILogoAnim } from "./logo/ILogoAnim";
import { IFactoryAnim } from "./factory/IFactoryAnim";
import RandomFactoryAnim from "./factory/RandomFactoryAnim";
import ReverseLogoAnim from "./logo/ReverseLogoAnim";

export default class ConveyerAnimator {
  private frameAnim: IFrameAnim;
  private logoAnim: ILogoAnim;
  private factoryAnim: IFactoryAnim;
  constructor() {
    this.factoryAnim = new RandomFactoryAnim();
    this.frameAnim = new SimpleFrameAnim();
    this.logoAnim = new SimpleLogoAnim();
    this.factoryAnim.startAnim(20);
  }
  public startAnim = async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    await Promise.all([
      this.frameAnim.startLeftFrameAnim(2),
      this.frameAnim.startFirstTextAnim(2),
      this.frameAnim.startLastTextAnim(2),
    ]);
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    await this.frameAnim.startRightFrameAnim(2);
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    this.logoAnim.startAnim(0.5, 15);
    await new Promise<void>((resolve) => setTimeout(resolve, 6000));
  };
}
