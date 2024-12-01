import ClothesGenerator from "./ClothesGenerator";
interface GenerateInformation {
  time: number;
  x: number;
  src: string;
}
export default class PatternClothesGenerator implements ClothesGenerator {
  public readonly parentElement: HTMLElement;
  private aliveImages: HTMLImageElement[] = [];
  private pattern: GenerateInformation[] = [];
  constructor(parent) {
    this.parentElement = parent;
    this.pattern.push({ time: 0, x: 10, src: "assets/images/top/clothes/clothes_1.png" });
    this.pattern.push({ time: 725, x: 90, src: "assets/images/top/clothes/clothes_4.png" });
    this.pattern.push({ time: 1800, x: 30, src: "assets/images/top/clothes/clothes_2.png" });
    this.pattern.push({ time: 2340, x: 60, src: "assets/images/top/clothes/clothes_5.png" });
    this.pattern.push({ time: 3060, x: 40, src: "assets/images/top/clothes/clothes_8.png" });
    this.pattern.push({ time: 3650, x: 16, src: "assets/images/top/clothes/clothes_3.png" });
    this.pattern.push({ time: 4325, x: 70, src: "assets/images/top/clothes/clothes_7.png" });
    this.pattern.push({ time: 4950, x: 30, src: "assets/images/top/clothes/clothes_1.png" });
    this.pattern.push({ time: 5650, x: 50, src: "assets/images/top/clothes/clothes_3.png" });
    this.pattern.push({ time: 6000, x: 80, src: "assets/images/top/clothes/clothes_6.png" });
    this.pattern.push({ time: 7150, x: 20, src: "assets/images/top/clothes/clothes_3.png" });
    this.pattern.push({ time: 7600, x: 44, src: "assets/images/top/clothes/clothes_8.png" });
    this.pattern.push({ time: 8450, x: 67, src: "assets/images/top/clothes/clothes_6.png" });
  }
  startGenerating(): void {
    const roopTime = 9000; // total time for one loop (in ms)
    const firstTime = performance.now();
    let lastTime = 0;

    const animate = (currentTime: number) => {
      const elapsedTime = (currentTime - firstTime) % roopTime;
      if (lastTime > elapsedTime) {
        lastTime = 0;
      }
      const imageInfos: GenerateInformation[] = this.getItemsForTime(elapsedTime, lastTime);
      this.generateImages(imageInfos);
      this.moveAliveImages(elapsedTime, lastTime, roopTime);
      this.removeAliveImages();
      lastTime = elapsedTime;
      return requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  generateImages(imageInfos: GenerateInformation[]): void {
    imageInfos.forEach((imageInfo) => {
      const image = this.createImage(imageInfo);
      this.aliveImages.push(image);
      this.parentElement.appendChild(image);
    });
  }

  removeAliveImages() {
    const parentRect = this.parentElement.getBoundingClientRect();
    for (let i = this.aliveImages.length - 1; i >= 0; i--) {
      const aliveImage = this.aliveImages[i];
      const childRect = aliveImage.getBoundingClientRect();
      const isOutsideParent = childRect.bottom < parentRect.top || childRect.top > parentRect.bottom || childRect.right < parentRect.left || childRect.left > parentRect.right;
      if (!isOutsideParent) continue;
      console.log("removeAliveImages");
      aliveImage.remove(); // DOMから削除
      this.aliveImages.splice(i, 1); // 配列から削除
    }
  }

  moveAliveImages(currentTime: number, lastTime: number, roopTime: number) {
    const parentRect = this.parentElement.getBoundingClientRect();
    const distance = parentRect.height;
    const elapsedTime = currentTime - lastTime;
    const ratio = 600 / roopTime;
    const next = ((elapsedTime * ratio) / 1000) * distance;
    this.aliveImages.forEach((aliveImage) => {
      const currentBottom = parseFloat(window.getComputedStyle(aliveImage).bottom) || 0;
      aliveImage.style.bottom = `${currentBottom + next}px`;
      if (next < 0) console.log("delta:" + next);
    });
  }

  createImage(imageInfo: GenerateInformation): HTMLImageElement {
    if (!imageInfo) throw new Error("imageInfoが見つかりませんでした。");
    const image = document.createElement("img");
    image.className = "img";
    image.src = imageInfo.src;
    image.style.left = `${imageInfo.x}%`;
    image.style.bottom = "0";
    return image;
  }

  getItemsForTime(currentTime: number, lastTime: number): GenerateInformation[] {
    // WARNING : 条件式に注意！
    return this.pattern.filter((item) => item.time >= lastTime && item.time < currentTime);
  }
}
