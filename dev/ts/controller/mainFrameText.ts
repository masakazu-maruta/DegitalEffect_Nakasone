const MainFrameTextController = () => {
  // DOMが完全に読み込まれてから処理を開始
  document.addEventListener("DOMContentLoaded", () => {
    const mainFrameText = document.getElementById("js-mainFrameText");
    if (!mainFrameText) {
      console.error("MainFrameText element not found!");
      return;
    }
    setSize(mainFrameText);
    window.addEventListener("resize", () => setSize(mainFrameText));
  });

  const setSize = (mainFrameText) => {
    const width = mainFrameText.clientWidth;
    const height = mainFrameText.clientHeight;
    mainFrameText.setAttribute("width", `${width}`);
    mainFrameText.setAttribute("height", `${height}`);
    console.log("Size updated:", width, height);
  };
};

export default MainFrameTextController;
