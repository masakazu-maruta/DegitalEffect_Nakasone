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
    this.leftFrame = this.createLeftFrame();
    this.rightFrame = this.createRightFrame();
    this.firstText = this.createFirstText();
    this.secondText = this.createSecondText();
    this.htmlElement.getElement().appendChild(this.leftFrame);
    this.htmlElement.getElement().appendChild(this.rightFrame);
    this.htmlElement.getElement().appendChild(this.firstText.path);
    this.htmlElement.getElement().appendChild(this.secondText.path);
    this.htmlElement.getElement().appendChild(this.firstText.text);
    this.htmlElement.getElement().appendChild(this.secondText.text);
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
  public createLeftFrame = (): SVGPathElement => {
    const svgPathElement: SVGPathElement = document.createElementNS(SVG_URL, "path");
    svgPathElement.setAttribute("id", "script-frameLeft");
    svgPathElement.setAttribute("stroke", "black");
    svgPathElement.setAttribute("stroke-width", "5");
    svgPathElement.setAttribute("fill", "none");
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
  public createRightFrame = (): SVGPathElement => {
    const svgPathElement: SVGPathElement = document.createElementNS(SVG_URL, "path");
    svgPathElement.setAttribute("id", "script-frameRight");
    svgPathElement.setAttribute("stroke", "black");
    svgPathElement.setAttribute("stroke-width", "5");
    svgPathElement.setAttribute("fill", "none");
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
  public createFirstText = (): SvgTextClass => {
    const firstText: SvgTextClass = {
      path: document.createElementNS(SVG_URL, "path"),
      text: document.createElementNS(SVG_URL, "text"),
      textPath: document.createElementNS(SVG_URL, "textPath"),
    };
    firstText.path.setAttribute("stroke", "transparent");
    firstText.path.setAttribute("fill", "transparent");
    firstText.path.setAttribute("id", "script-firstTextPath");
    firstText.text.setAttribute("font-size", "60");
    firstText.text.setAttribute("font-family", "Arial");
    firstText.text.setAttribute("fill", "black");
    firstText.textPath.setAttribute("id", "script-firstText");
    firstText.textPath.setAttribute("href", "#script-firstTextPath");
    firstText.textPath.textContent = "あらゆるものを循環させる";
    firstText.text.appendChild(firstText.textPath);
    return firstText;
  };
  public createSecondText = (): SvgTextClass => {
    const secondText: SvgTextClass = {
      path: document.createElementNS(SVG_URL, "path"),
      text: document.createElementNS(SVG_URL, "text"),
      textPath: document.createElementNS(SVG_URL, "textPath"),
    };
    secondText.path.setAttribute("stroke", "transparent");
    secondText.path.setAttribute("fill", "transparent");
    secondText.path.setAttribute("id", "script-secondTextPath");
    secondText.text.setAttribute("font-size", "60");
    secondText.text.setAttribute("font-family", "Arial");
    secondText.text.setAttribute("fill", "black");
    secondText.textPath.setAttribute("id", "script-secondText");
    secondText.textPath.setAttribute("href", "#script-secondTextPath");
    secondText.textPath.textContent = "We circulate our world";
    secondText.text.appendChild(secondText.textPath);
    return secondText;
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
        console.log(textWidth);
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

// <svg class="conveyer__frame" viewBox="0 0 100 100">
//     <path id="path" d="M 0 0 V 100 H 50" stroke="black" stroke-width="1" fill="none"
//         stroke-dasharray="100 150"></path>
//     <path id="path2" d="M 100 50 V 0  H 50" stroke="black" stroke-width="1" fill="none"
//         stroke-dasharray="100"></path>
//     <path id="t-path" d="M 10 0 V 90 H 50" stroke="black" stroke-width="0" fill="none"></path>
//     <path id="t-path2" d="M 10 0 V 90" stroke="black" stroke-width="0" fill="none" stroke-dasharray="100">
//     </path>
//     <text fill="black" font-size="5" font-family="Arial">
//         <textPath id="t-t" href="#t-path">てすとてすとてすと
//             <animate attributeName="startOffset" from="0" to="100%" dur="2s" repeatCount="1"
//                 fill="freeze" />
//         </textPath>
//     </text>
//     <text fill="black" font-size="5" font-family="Arial">
//         <textPath id="textPath" href="#t-path2">あああああああああ</textPath>
//     </text>
// </svg>
