export default class OpeningClothes {
  public readonly element: HTMLImageElement;
  private map: Map<string, string>;
  constructor(src: string) {
    this.init();
    this.element = document.createElement("img") as HTMLImageElement;
    this.element.src = src;
    this.element.className = "opening__clothes-item" + " " + this.map.get(src);
  }
  private init = () => {
    const collectPrefix = "assets/images/items/collect/";
    const createPrefix = "assets/images/items/create/";
    this.map = new Map();
    this.map.set(collectPrefix + "clothes_1.png", "--normal");
    this.map.set(collectPrefix + "clothes_2.png", "--normal");
    this.map.set(collectPrefix + "clothes_3.png", "--normal");
    this.map.set(collectPrefix + "clothes_4.png", "--normal");
    this.map.set(collectPrefix + "clothes_5.png", "--normal");
    this.map.set(collectPrefix + "clothes_6.png", "--long");
    this.map.set(collectPrefix + "clothes_7.png", "--normal");
    this.map.set(collectPrefix + "clothes_8.png", "--normal");
    this.map.set(collectPrefix + "clothes_9.png", "--long");
    this.map.set(collectPrefix + "pet.png", "--pet");
    this.map.set(createPrefix + "clothes_1.png", "--normal");
    this.map.set(createPrefix + "clothes_2.png", "--normal");
    this.map.set(createPrefix + "clothes_3.png", "--long");
    this.map.set(createPrefix + "clothes_4.png", "--normal");
    this.map.set(createPrefix + "clothes_5.png", "--normal");
    this.map.set(createPrefix + "clothes_6.png", "--long");
    this.map.set(createPrefix + "clothes_7.png", "--normal");
    this.map.set(createPrefix + "clothes_8.png", "--normal");
    this.map.set(createPrefix + "pet_1.png", "--pet");
    this.map.set(createPrefix + "pet_2.png", "--pet");
    this.map.set(createPrefix + "pet_3.png", "--pet");
  };
}