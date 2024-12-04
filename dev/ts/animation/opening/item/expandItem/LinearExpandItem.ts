import { GlobalViewportManager } from "../../../../util/GlobalViewportManager";
import { IExpandItem } from "./IExpandItem";
import gsap from "gsap";

export class LinearExpandItem implements IExpandItem {
  public expand = async (htmlElement: HTMLElement, onAnimationComplete: () => void): Promise<void> => {
    gsap.killTweensOf(htmlElement); // 以前のアニメーションを停止
    const newScale = 7;
    const tl = gsap.timeline();

    // Promiseを作成し、アニメーションの完了時にresolveする
    return new Promise<void>((resolve) => {
      const x = Math.random() * GlobalViewportManager.getViewPortWidth();
      const y = Math.random() * GlobalViewportManager.getViewPortHeight();
      const startRotation = Math.random() * 180;
      const goalRotation = startRotation + (Math.random() * 45 - 90);
      tl.fromTo(
        htmlElement,
        { scale: 0.5, x: "50vw", y: "50vh", rotation: startRotation, display: "block" },
        {
          scale: newScale,
          duration: 5,
          x: `${x}px`,
          y: `${y}px`,
          rotation: goalRotation,
          ease: "power2.out",
          onComplete: () => {
            onAnimationComplete(); // アニメーション完了時にコールバックを呼ぶ
            resolve(); // Promiseを解決
          },
        }
      );
    });
  };
}
