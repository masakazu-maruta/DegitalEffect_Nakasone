import ClothesGenerator from "./ClothesGenerator";

export default class RandomClothesGenerator implements ClothesGenerator {
  startGenerating(): void {
    const image = document.createElement("img");
    image.src = "assets/images/top/test/test.svg";
  }
}
