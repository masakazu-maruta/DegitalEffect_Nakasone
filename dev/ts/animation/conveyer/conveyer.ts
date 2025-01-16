import { IFrameAnim } from "./frame/IFrameAnim";
import SimpleFrameAnim from "./frame/SimpleFrameAnim";
import SimpleLogoAnim from "./logo/SimpleLogoAnim";
import { ILogoAnim } from "./logo/ILogoAnim";
import { IFactoryAnim } from "./factory/IFactoryAnim";
import RandomFactoryAnim from "./factory/RandomFactoryAnim";
import ReverseLogoAnim from "./logo/ReverseLogoAnim";
import ReverseFitFrameAnim from "./frame/ReverseFitFrameAnim";
import ReverseFrameAnim from "./frame/ReverseFrameAnim";

export default class ConveyerAnimator {
  private frameAnim: IFrameAnim;
  private logoAnim: ILogoAnim;
  private factoryAnim: IFactoryAnim;
  constructor() {
    this.factoryAnim = new RandomFactoryAnim();
    // this.frameAnim = new SimpleFrameAnim();
    // this.frameAnim = new ReverseFrameAnim();
    this.frameAnim = new ReverseFitFrameAnim();
    this.logoAnim = new SimpleLogoAnim();
    // this.logoAnim = new ReverseLogoAnim();
    this.factoryAnim.startAnim(20);
  }
  public startAnim = async () => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    await this.frameAnim.startRightFrameAnim(1.5);
    // this.frameAnim.startLeftFrameAnim(2)
    await Promise.all([this.frameAnim.startFirstTextAnim(1.5), this.frameAnim.startLastTextAnim(1.5)]);
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    this.logoAnim.startAnim(0.5, 15);
    await new Promise<void>((resolve) => setTimeout(resolve, 6000));
  };
}
