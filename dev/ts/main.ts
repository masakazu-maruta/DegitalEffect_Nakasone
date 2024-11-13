import { MainLogo } from "./components/mainLogo";
import { MainFrameBorder } from "./components/mainFrameBorder";
import { MainFrameText } from "./components/mainFrameText";
import { MainFrameTextFirst } from "./components/mainFrameTextFirst";
import MainFrameBorderController from "./controller/mainFrameBoder";
import MainFrameTextController from "./controller/mainFrameText";
import MainFrameTextFirstController from "./controller/mainFrameTextFirst";
import { MainFrameBorderRight } from "./components/mainFrameBorderRight";
import mainFrameBorderRightController from "./controller/mainFrameBoderRight";
import { MainBackground } from "./components/mainBackground";
customElements.define("nakasone-logo", MainLogo);
customElements.define("nakasone-frame-border", MainFrameBorder);
customElements.define("nakasone-frame-border-right", MainFrameBorderRight);
customElements.define("nakasone-frame-text", MainFrameText);
customElements.define("nakasone-frame-text-first", MainFrameTextFirst);
customElements.define("nakasone-background", MainBackground);

//animation

MainFrameBorderController();
MainFrameTextController();
MainFrameTextFirstController();
mainFrameBorderRightController();
