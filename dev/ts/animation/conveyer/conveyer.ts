import Factory from "./factory/Factory";
import Frame from "./frame/Frame";
import Logos from "./logo/Logos";

const conveyer = async () => {
  const factory: Factory = new Factory();
  factory.factory(30);
  const frame: Frame = new Frame("script-frameSvg");
  await Promise.all([frame.leftFrameAnim(3), frame.firstTextAnim(3), frame.secondTextAnim(3)]);
  await frame.rightFrameAnim(3);
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
  const logos: Logos = new Logos("script-logoContainer");
  logos.startAnim(0.5, 15);
  await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      const container = document.getElementById("script-conveyerParent");
      if (!container) return;
      gsap.fromTo(
        container,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            container.remove();
            resolve();
          },
        }
      );
    }, 5000)
  );
};

export default conveyer;
