import gsap from "gsap";
import { IFrameAnim } from "./frame/IFrameAnim";
import SimpleFrameAnim from "./frame/SimpleFrameAnim";
import SimpleLogoAnim from "./logo/SimpleLogoAnim";
import { ILogoAnim } from "./logo/ILogoAnim";

const conveyer = async () => {
  const frameAnim: IFrameAnim = new SimpleFrameAnim();
  const logoAnim: ILogoAnim = new SimpleLogoAnim();
  await new Promise<void>((resolve) => setTimeout(resolve, 1500));
  await Promise.all([frameAnim.startLeftFrameAnim(2), frameAnim.startFirstTextAnim(2), frameAnim.startLastTextAnim(2)]);
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  await frameAnim.startRightFrameAnim(2);
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  logoAnim.startAnim(0.5, 15);
  await new Promise<void>((resolve) => setTimeout(resolve, 6000));
};

export default conveyer;
