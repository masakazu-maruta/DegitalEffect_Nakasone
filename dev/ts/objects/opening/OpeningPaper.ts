export default class OpeningPaper {
  public readonly element;
  constructor() {
    this.element = document.createElement("div") as HTMLDivElement;
    this.element.style.backgroundColor = this.createRandomColor();
    this.element.className = "opening__clothes-item --paper";
  }

  public createRandomColor(): string {
    const rgb = [0, 0, 0];
    const randomCount = Math.floor(Math.random() * 2) + 1; // 1または2をランダムに選ぶ
    const indices = [0, 1, 2];
    const selectedIndexes = indices.sort(() => Math.random() - 0.5).slice(0, randomCount);
    selectedIndexes.forEach((index) => {
      rgb[index] = 255;
    });
    const r = Math.floor(rgb[0]);
    const g = Math.floor(rgb[1]);
    const b = Math.floor(rgb[2]);
    return `rgb(${r},${g},${b})`;
  }
}
