const mainFrameBorderRightController = () => {
  // DOMが完全に読み込まれてから処理を開始
  document.addEventListener("DOMContentLoaded", () => {
    const mainFrameBorderRight = document.getElementById("js-mainFrameBorderRight");
    if (!mainFrameBorderRight) {
      console.error("mainFrameBorderRight element not found!");
      return;
    }
    setSize(mainFrameBorderRight);
    window.addEventListener("resize", () => setSize(mainFrameBorderRight));
  });

  const setSize = (mainFrameBorderRight) => {
    const width = mainFrameBorderRight.clientWidth;
    const height = mainFrameBorderRight.clientHeight;
    mainFrameBorderRight.setAttribute("width", `${width}`);
    mainFrameBorderRight.setAttribute("height", `${height}`);
    console.log("Size updated:", width, height);
  };
};

export default mainFrameBorderRightController;
