const MainFrameTextFirstController = () => {
  // DOMが完全に読み込まれてから処理を開始
  document.addEventListener("DOMContentLoaded", () => {
    const mainFrameTextFirst = document.getElementById("js-mainFrameTextFirst");
    if (!mainFrameTextFirst) {
      console.error("MainFrameTextFirst element not found!");
      return;
    }
    setSize(mainFrameTextFirst);
    window.addEventListener("resize", () => setSize(mainFrameTextFirst));
  });

  const setSize = (mainFrameTextFirst) => {
    const width = mainFrameTextFirst.clientWidth;
    const height = mainFrameTextFirst.clientHeight;
    mainFrameTextFirst.setAttribute("width", `${width}`);
    mainFrameTextFirst.setAttribute("height", `${height}`);
    console.log("Size updated:", width, height);
  };
};

export default MainFrameTextFirstController;
