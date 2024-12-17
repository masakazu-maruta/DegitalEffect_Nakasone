import Svg from "../util/Svg";
import gsap from "gsap";
import { IFrameAnim } from "./IFrameAnim";
import FrameAssetManager from "./FrameAssetManager";
const SVG_URL = "http://www.w3.org/2000/svg";
export default class SimpleFrameAnim implements IFrameAnim {
  private manager: FrameAssetManager;
  private offsetX = 0.03;
  private offsetY = 0.03;
  constructor() {
    this.manager = FrameAssetManager.getInstance();
  }
  private getPathLength = () => {
    return this.manager.container.getMaxHeight() + this.getPathWidth();
  };
  private ratio2ViewPortWidth = (ratio: number) => {
    return this.manager.container.getMaxWidth() * ratio;
  };
  private ratio2ViewPortHeight = (ratio: number) => {
    return this.manager.container.getMaxHeight() * ratio;
  };
  private getPathLineLength = () => {
    return this.getPathHeight() + this.getPathWidth();
  };

  private getPathHeight = () => {
    return this.manager.container.getMaxHeight() * 0.5;
  };
  private getPathWidth = () => {
    return this.manager.container.getMaxWidth() * 0.7;
  };
  public optimizeLeftFrame = () => {
    this.manager.leftFramePath.setAttribute("strokeDashoffset", `${this.getPathLineLength()}`);
    this.manager.leftFramePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(this.offsetX)} 0 V ${this.ratio2ViewPortHeight(1 - this.offsetY)} H ${this.getPathWidth()}`);
    this.manager.leftFramePath.setAttribute("stroke-dasharray", `${this.getPathLineLength()},${this.ratio2ViewPortHeight(1 - this.offsetY) + this.getPathWidth()}`);
    this.manager.leftFramePath.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    document.addEventListener("resize", () => {
      this.manager.leftFramePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(this.offsetX)} 0 V ${this.ratio2ViewPortHeight(1 - this.offsetY)} H ${this.getPathWidth()}`);
      this.manager.leftFramePath.setAttribute("stroke-dasharray", `${this.getPathLineLength()},${this.ratio2ViewPortHeight(1 - this.offsetY) + this.getPathWidth()}`);
      this.manager.leftFramePath.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    });
  };
  public optimizeRightFrame = () => {
    this.manager.rightFramePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(1 - this.offsetX)} ${this.getPathHeight()} V ${this.ratio2ViewPortHeight(this.offsetX)} H ${this.ratio2ViewPortWidth(1 - this.offsetY) - this.getPathWidth()}`);
    this.manager.rightFramePath.setAttribute("stroke-dasharray", `${this.getPathLineLength()},${this.ratio2ViewPortHeight(1 - this.offsetY) + this.getPathWidth()}`);
    this.manager.rightFramePath.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    document.addEventListener("resize", () => {
      this.manager.rightFramePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(1 - this.offsetY)} ${this.getPathHeight()} V ${this.ratio2ViewPortHeight(this.offsetX)} H ${this.ratio2ViewPortWidth(1 - this.offsetY) - this.getPathWidth()}`);
      this.manager.rightFramePath.setAttribute("stroke-dasharray", `${this.getPathLineLength()},${this.ratio2ViewPortHeight(1 - this.offsetY) + this.getPathWidth()}`);
      this.manager.rightFramePath.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    });
  };

  public startLeftFrameAnim = async (duration: number) => {
    this.optimizeLeftFrame();
    await new Promise<void>((resolve) => {
      gsap.fromTo(
        this.manager.leftFramePath,
        { strokeDashoffset: `${this.getPathLineLength()}` },
        {
          strokeDashoffset: `${-(this.getPathLength() - this.getPathLineLength())}`,
          duration: duration,
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };
  public startRightFrameAnim = async (duration: number) => {
    this.optimizeRightFrame();
    await new Promise<void>((resolve) => {
      gsap.fromTo(
        this.manager.rightFramePath,
        { strokeDashoffset: `${this.getPathLineLength()}` },
        {
          strokeDashoffset: `${0}`,
          duration: duration,
          onComplete: () => {
            resolve();
          },
        }
      );
    });
  };
  public startFirstTextAnim = async (duration: number) => {
    await new Promise<void>((resolve) =>
      setTimeout(async () => {
        const bBox = this.manager.firstTitleText.getBBox();
        const textWidth = bBox.height;
        const textHeight = bBox.width;
        const secondTextWidth = this.manager.lastTitleText.getBBox().width;
        const secondTextHeight = this.manager.lastTitleText.getBBox().height;
        this.manager.firstTitlePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(this.offsetX) + textHeight / 1.5} ${-textWidth - secondTextWidth} V ${this.ratio2ViewPortHeight(1 - this.offsetY) - secondTextHeight}`);
        document.addEventListener("resize", () => {
          this.manager.firstTitlePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(this.offsetX) + textHeight / 1.5} ${-textWidth - secondTextWidth} V ${this.ratio2ViewPortHeight(1 - this.offsetY) - secondTextHeight}`);
        });
        gsap.fromTo(
          this.manager.firstTitleTextPath,
          {
            attr: { startOffset: 0 }, // アニメーション終了時に開始位置を0に設定
          },
          {
            attr: { startOffset: this.ratio2ViewPortHeight(1 - this.offsetY) - textHeight + secondTextWidth }, // パスの長さに基づいて開始位置を設定
            duration: duration, // アニメーションの持続時間
            onComplete: () => {
              resolve();
            },
          }
        );
      }, 10)
    );
  };
  public startLastTextAnim = async (duration: number) => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        const bBox = this.manager.lastTitleText.getBBox();
        const textWidth = bBox.width;
        const textHeight = bBox.height;
        const firstBBox = this.manager.firstTitleText.getBBox();
        const firstTextHeight = firstBBox.width;
        this.manager.lastTitlePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(this.offsetX) + firstTextHeight / 3.2} ${-textWidth} V ${this.ratio2ViewPortHeight(1 - this.offsetY - 0.02)} h ${textWidth}`);
        document.addEventListener("resize", () => {
          this.manager.lastTitlePath.setAttribute("d", `M ${this.ratio2ViewPortWidth(this.offsetX) + firstTextHeight / 3.2} ${-textWidth} V ${this.ratio2ViewPortHeight(1 - this.offsetY - 0.02)} h ${textWidth}`);
        });
        gsap.fromTo(
          this.manager.lastTitleTextPath,
          {
            attr: { startOffset: 0 }, // アニメーション終了時に開始位置を0に設定
          },
          {
            attr: { startOffset: this.ratio2ViewPortHeight(1 - this.offsetY - 0.02) + textWidth }, // パスの長さに基づいて開始位置を設定
            duration: duration, // アニメーションの持続時間
            onComplete: () => {
              resolve();
            },
          }
        );
      }, 10)
    );
  };
}
