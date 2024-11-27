import { IExpandItem } from "./IExpandItem";
import gsap from "gsap";

export class LinearExpandItem implements IExpandItem {
  public expand = async (imgElement: HTMLImageElement, onAnimationComplete: () => void): Promise<void> => {
    gsap.killTweensOf(imgElement); // 以前のアニメーションを停止
    const newScale = 7;
    const tl = gsap.timeline();

    // Promiseを作成し、アニメーションの完了時にresolveする
    return new Promise<void>((resolve) => {
      tl.fromTo(
        imgElement,
        { scale: 0.5, x: "50vw", y: "50vh" },
        {
          scale: newScale,
          duration: 5,
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
