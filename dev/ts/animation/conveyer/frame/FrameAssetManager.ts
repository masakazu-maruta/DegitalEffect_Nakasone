import GlobalFunction from "../../../util/GlobalFunction";
import Svg from "../util/Svg";
export default class FrameAssetManager {
  private static instance: FrameAssetManager;
  public readonly container: Svg;
  public readonly leftFramePath: SVGPathElement;
  public readonly rightFramePath: SVGPathElement;
  public readonly firstTitlePath: SVGPathElement;
  public readonly firstTitleText: SVGTextElement;
  public readonly firstTitleTextPath: SVGTextPathElement;
  public readonly lastTitlePath: SVGPathElement;
  public readonly lastTitleText: SVGTextElement;
  public readonly lastTitleTextPath: SVGTextPathElement;
  private constructor() {
    const i = GlobalFunction.getInstance();
    this.container = new Svg("script-frameSvg");
    this.leftFramePath = i.getElementByCheckedId<SVGPathElement>("script-frameLeft");
    this.rightFramePath = i.getElementByCheckedId<SVGPathElement>("script-frameRight");
    this.firstTitlePath = i.getElementByCheckedId<SVGPathElement>("script-firstTextPath");
    this.firstTitleText = i.getElementByCheckedId<SVGTextElement>("script-firstTextText");
    this.firstTitleTextPath = i.getElementByCheckedId<SVGTextPathElement>("script-firstTextTextPath");
    this.lastTitlePath = i.getElementByCheckedId<SVGPathElement>("script-lastTextPath");
    this.lastTitleText = i.getElementByCheckedId<SVGTextElement>("script-lastTextText");
    this.lastTitleTextPath = i.getElementByCheckedId<SVGTextPathElement>("script-lastTextTextPath");
  }
  public static getInstance = (): FrameAssetManager => {
    if (!this.instance) this.instance = new FrameAssetManager();
    return this.instance;
  };
}
