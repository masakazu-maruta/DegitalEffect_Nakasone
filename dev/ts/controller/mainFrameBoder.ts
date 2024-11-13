const MainFrameBorderController = () => {
  // DOMが完全に読み込まれてから処理を開始
  document.addEventListener("DOMContentLoaded", () => {
    const mainFrameBorder = document.getElementById("js-mainFrameBorder");
    if (!mainFrameBorder) {
      console.error("MainFrameBorder element not found!");
      return;
    }
    setSize(mainFrameBorder);
    window.addEventListener("resize", () => setSize(mainFrameBorder));
  });

  const setSize = (mainFrameBorder) => {
    const width = mainFrameBorder.clientWidth;
    const height = mainFrameBorder.clientHeight;
    mainFrameBorder.setAttribute("width", `${width}`);
    mainFrameBorder.setAttribute("height", `${height}`);
    console.log("Size updated:", width, height);
  };
};

export default MainFrameBorderController;
