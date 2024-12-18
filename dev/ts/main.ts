import ContainerAssetManager from "./animation/ContainerAssetManager";
import ConveyerAnimator from "./animation/conveyer/conveyer";
import conveyer from "./animation/conveyer/conveyer";
import { IFactoryAnim } from "./animation/conveyer/factory/IFactoryAnim";
import RandomFactoryAnim from "./animation/conveyer/factory/RandomFactoryAnim";
import FadeAnim from "./animation/FadeAnim";
import OpeningAnimator from "./animation/opening/OpeningAnimator";
import staticAnim from "./animation/static/static";
import { GlobalViewportManager } from "./util/GlobalViewportManager";

const maxMediaQuery = window.matchMedia("(max-width: 899px)");
const minMediaQuery = window.matchMedia("(min-width: 900px)");
document.addEventListener("DOMContentLoaded", () => {
  pcAnimation();
  if (maxMediaQuery.matches) {
    staticAnimator.spReset();
    spAnimation();
  }
  if (minMediaQuery.matches) {
    staticAnimator.pcReset();
  }
  maxMediaQuery.addEventListener("change", (e) => {
    if (maxMediaQuery.matches) {
      staticAnimator.spReset();
      spAnimation();
    }
  });
  minMediaQuery.addEventListener("change", (e) => {
    if (minMediaQuery.matches) {
      staticAnimator.pcReset();
    }
  });
});

const staticAnimator = new staticAnim();
const fadeAnim: FadeAnim = new FadeAnim();
const pcAnimation = async () => {
  const containerManager: ContainerAssetManager = ContainerAssetManager.getInstance();
  const openingAnimator: OpeningAnimator = new OpeningAnimator();
  const conveyerAnimator: ConveyerAnimator = new ConveyerAnimator();
  await makeClickToCompleteTask(openingAnimator.startAnim, 0);
  await fadeOut(containerManager.openingContainer);
  await fadeIn(containerManager.conveyerContainer);
  await makeClickToCompleteTask(conveyerAnimator.startAnim, 3000);
  await fadeOut(containerManager.conveyerContainer);
  await fadeIn(containerManager.staticContainer);
};

const spAnimation = () => {
  staticAnimator.staticAnim();
};

const makeClickToCompleteTask = async (task: () => void, afterDuration: number) => {
  let removeListener: () => void = () => {};
  const originTask = new Promise<void>(async (resolve) => {
    await task();
    await new Promise<void>((resolve) => setTimeout(resolve, afterDuration));
    resolve();
  });
  const clickTask = new Promise<void>((resolve) => {
    const onClick = () => {
      resolve();
      if (removeListener !== null) {
        removeListener();
      }
    };
    document.body.addEventListener("click", onClick);
    removeListener = () => {
      document.body.removeEventListener("click", onClick); // 正しくリスナーを削除
    };
  });
  await Promise.race([originTask, clickTask]);
  removeListener();
};

const fadeIn = (container: HTMLElement) => {
  fadeAnim.fadeIn(container, 0.5, () => {});
};

const fadeOut = (container: HTMLElement) => {
  fadeAnim.fadeOut(container, 0.5, () => {
    container.remove();
  });
};
