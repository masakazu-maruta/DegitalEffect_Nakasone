import Svg from "../util/Svg";
import gsap from "gsap";
interface SvgTextClass {
  path: SVGPathElement;
  text: SVGTextElement;
  textPath: SVGTextPathElement;
}
const SVG_URL = "http://www.w3.org/2000/svg";
export default class Frame {
  private htmlElement: Svg;
  private leftFrame: SVGPathElement;
  private rightFrame: SVGPathElement;
  private firstText: SvgTextClass;
  private secondText: SvgTextClass;
  constructor(id: string) {
    this.htmlElement = new Svg(id);
    this.leftFrame = this.getLeftFrame("script-frameLeft");
    this.rightFrame = this.getRightFrame("script-frameRight");
    this.firstText = this.getTextSvg("script-firstTextPath", "script-firstTextText", "script-firstTextTextPath");
    this.secondText = this.getTextSvg("script-secondTextPath", "script-secondTextText", "script-secondTextTextPath");
  }
  private getPathLength = () => {
    return this.htmlElement.getMaxHeight() + this.getPathWidth();
  };
  private ratio2ViewPortWidth = (ratio: number) => {
    return this.htmlElement.getMaxWidth() * ratio;
  };
  private ratio2ViewPortHeight = (ratio: number) => {
    return this.htmlElement.getMaxHeight() * ratio;
  };
  private getPathLineLength = () => {
    return this.getPathHeight() + this.getPathWidth();
  };

  private getPathHeight = () => {
    return this.htmlElement.getMaxHeight() * 0.5;
  };
  private getPathWidth = () => {
    return this.htmlElement.getMaxWidth() * 0.7;
  };
  public getLeftFrame = (id: string): SVGPathElement => {
    const svgPathElement = document.getElementById(id);
    if (!svgPathElement || !(svgPathElement instanceof SVGPathElement)) throw new Error("svgPathElementが見つかりません");
    svgPathElement.setAttribute("strokeDashoffset", `${this.getPathLineLength()}`);
    svgPathElement.setAttribute(
      "d",
      `M ${this.ratio2ViewPortWidth(0.05)} 0 V ${this.ratio2ViewPortHeight(0.95)} H ${this.getPathWidth()}`
    );
    svgPathElement.setAttribute(
      "stroke-dasharray",
      `${this.getPathLineLength()},${this.ratio2ViewPortHeight(0.95) + this.getPathWidth()}`
    );
    svgPathElement.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    document.addEventListener("resize", () => {
      svgPathElement.setAttribute(
        "d",
        `M ${this.ratio2ViewPortWidth(0.05)} 0 V ${this.ratio2ViewPortHeight(0.95)} H ${this.getPathWidth()}`
      );
      svgPathElement.setAttribute(
        "stroke-dasharray",
        `${this.getPathLineLength()},${this.ratio2ViewPortHeight(0.95) + this.getPathWidth()}`
      );
      svgPathElement.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    });
    return svgPathElement;
  };
  public getRightFrame = (id: string): SVGPathElement => {
    const svgPathElement = document.getElementById(id);
    if (!svgPathElement || !(svgPathElement instanceof SVGPathElement)) throw new Error("svgPathElementが見つかりません");
    svgPathElement.setAttribute(
      "d",
      `M ${this.ratio2ViewPortWidth(0.95)} ${this.getPathHeight()} V ${this.ratio2ViewPortHeight(0.05)} H ${this.ratio2ViewPortWidth(0.95) - this.getPathWidth()}`
    );
    svgPathElement.setAttribute(
      "stroke-dasharray",
      `${this.getPathLineLength()},${this.ratio2ViewPortHeight(0.95) + this.getPathWidth()}`
    );
    svgPathElement.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    document.addEventListener("resize", () => {
      svgPathElement.setAttribute(
        "d",
        `M ${this.ratio2ViewPortWidth(0.95)} ${this.getPathHeight()} V ${this.ratio2ViewPortHeight(0.05)} H ${this.ratio2ViewPortWidth(0.95) - this.getPathWidth()}`
      );
      svgPathElement.setAttribute(
        "stroke-dasharray",
        `${this.getPathLineLength()},${this.ratio2ViewPortHeight(0.95) + this.getPathWidth()}`
      );
      svgPathElement.setAttribute("stroke-dashoffset", `${this.getPathLineLength()}`);
    });
    return svgPathElement;
  };
  public getTextSvg = (pathId: string, textId: string, textPathId: string): SvgTextClass => {
    const svgPathElement = document.getElementById(pathId);
    if (!svgPathElement || !(svgPathElement instanceof SVGPathElement)) throw new Error("svgPathElementが見つかりません");
    const svgTextElement = document.getElementById(textId);
    if (!svgTextElement || !(svgTextElement instanceof SVGTextElement)) throw new Error("svgTextElementが見つかりません");
    const svgTextPathElement = document.getElementById(textPathId);
    if (!svgTextPathElement || !(svgTextPathElement instanceof SVGTextPathElement))
      throw new Error("svgTextPathElementが見つかりません");
    const firstText: SvgTextClass = {
      path: svgPathElement,
      text: svgTextElement,
      textPath: svgTextPathElement,
    };
    return firstText;
  };

  public leftFrameAnim = async (duration: number) => {
    await new Promise<void>((resolve) => {
      gsap.fromTo(
        this.leftFrame,
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
  public rightFrameAnim = async (duration: number) => {
    await new Promise<void>((resolve) => {
      gsap.fromTo(
        this.rightFrame,
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
  public firstTextAnim = async (duration: number) => {
    await new Promise<void>((resolve) =>
      setTimeout(async () => {
        const bBox = this.firstText.text.getBBox();
        const textWidth = bBox.width;
        const textHeight = bBox.height;
        const secondTextWidth = this.secondText.text.getBBox().width;
        this.firstText.path.setAttribute(
          "d",
          `M ${this.ratio2ViewPortWidth(0.07)} ${-textWidth - secondTextWidth} V ${this.ratio2ViewPortHeight(0.93) - textHeight}`
        );
        document.addEventListener("resize", () => {
          this.firstText.path.setAttribute(
            "d",
            `M ${this.ratio2ViewPortWidth(0.07)} ${-textWidth - secondTextWidth} V ${this.ratio2ViewPortHeight(0.93) - textHeight}`
          );
        });
        gsap.fromTo(
          this.firstText.textPath,
          {
            attr: { startOffset: 0 }, // アニメーション終了時に開始位置を0に設定
          },
          {
            attr: { startOffset: this.ratio2ViewPortHeight(0.93) - textHeight + secondTextWidth }, // パスの長さに基づいて開始位置を設定
            duration: duration, // アニメーションの持続時間
            onComplete: () => {
              resolve();
            },
          }
        );
      }, 10)
    );
  };
  public secondTextAnim = async (duration: number) => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        const bBox = this.secondText.text.getBBox();
        const textWidth = bBox.width;
        this.secondText.path.setAttribute(
          "d",
          `M ${this.ratio2ViewPortWidth(0.07)} ${-textWidth} V ${this.ratio2ViewPortHeight(0.93)} h ${textWidth}`
        );
        document.addEventListener("resize", () => {
          this.secondText.path.setAttribute(
            "d",
            `M ${this.ratio2ViewPortWidth(0.07)} ${-textWidth} V ${this.ratio2ViewPortHeight(0.93)} h ${textWidth}`
          );
        });
        gsap.fromTo(
          this.secondText.textPath,
          {
            attr: { startOffset: 0 }, // アニメーション終了時に開始位置を0に設定
          },
          {
            attr: { startOffset: this.ratio2ViewPortHeight(0.93) + textWidth }, // パスの長さに基づいて開始位置を設定
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
