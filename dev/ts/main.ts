import ContainerAssetManager from "./animation/ContainerAssetManager";
import conveyer from "./animation/conveyer/conveyer";
import { IFactoryAnim } from "./animation/conveyer/factory/IFactoryAnim";
import RandomFactoryAnim from "./animation/conveyer/factory/RandomFactoryAnim";
import FadeAnim from "./animation/FadeAnim";
import opening from "./animation/opening/opening";

document.addEventListener("DOMContentLoaded", async () => {
  const fadeAnim: FadeAnim = new FadeAnim();
  const containerManager: ContainerAssetManager = ContainerAssetManager.getInstance();
  const factory: IFactoryAnim = new RandomFactoryAnim();
  factory.startAnim(20);
  await opening();
  await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  fadeAnim.fadeOut(containerManager.openingContainer, 0.5, () => {
    containerManager.openingContainer.remove();
  });
  fadeAnim.fadeIn(containerManager.conveyerContainer, 0.5, () => {});
  await conveyer();
  await new Promise<void>((resolve) => setTimeout(resolve, 5000));
  fadeAnim.fadeOut(containerManager.conveyerContainer, 0.5, () => {
    containerManager.conveyerContainer.remove();
  });
});
