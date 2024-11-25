import { gsap } from "gsap";
const imageSrcs = [
  "assets/images/top/clothes/clothes_1.png",
  "assets/images/top/clothes/clothes_2.png",
  "assets/images/top/clothes/clothes_3.png",
  "assets/images/top/clothes/clothes_4.png",
  "assets/images/top/clothes/clothes_5.png",
  "assets/images/top/clothes/clothes_6.png",
  "assets/images/top/clothes/clothes_7.png",
  "assets/images/top/clothes/clothes_8.png",
];

let globalCount = 0;

interface WarehouseElement {
  element: HTMLImageElement;
  currentScale: number;
  animationId: number | null;
}

interface Clothes {
  element: HTMLImageElement;
  currenntTop: number;
}

const waitForGlobalCount = (cnt: number): Promise<void> => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (globalCount === cnt) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
};

const startProcessing = async (cnt: number, warehouse: WarehouseElement, clothes: Clothes[]) => {
  await waitForGlobalCount(cnt);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  appearClothes(clothes);
  decreaseWarehouse(warehouse);
};

const opening = () => {
  const sumClothes: number = 3;
  const warehouse: WarehouseElement = {
    element: document.getElementById("js-openingWarehouse") as HTMLImageElement,
    currentScale: 1,
    animationId: null,
  };
  const clothes: Clothes[] = createRandomClothesElements(sumClothes);
  fallClothes(clothes, warehouse);
  startProcessing(sumClothes, warehouse, clothes);
};

const fallClothes = async (clothes: Clothes[], warehouse: WarehouseElement) => {
  const warehouseRect = warehouse.element?.getBoundingClientRect();
  const warehouseTop = warehouseRect?.top || -1;
  const duration = 500;
  const pxByMs = 1;
  const eraseAction = () => {
    increaseWarehouse(warehouse);
    globalCount++;
  };
  for (let i = 0; i < clothes.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, duration));
    const currentTime = performance.now();
    requestAnimationFrame(() => fallAnimate(clothes[i], pxByMs, warehouseTop, currentTime, eraseAction));
  }
};

const fallAnimate = (clothes: Clothes, pxByMs: number, maxYPx: number, lastTime: number, eraseAction: () => void) => {
  const currentTime = performance.now();
  const elapsedTime = currentTime - lastTime;
  const moveAmount = pxByMs * elapsedTime;
  clothes.currenntTop = clothes.currenntTop + moveAmount;
  clothes.element.style.top = `${clothes.currenntTop}px`;

  const clothesRect = clothes.element?.getBoundingClientRect() || -1;
  if (clothesRect.top > maxYPx) {
    clothes.element.style.display = "none";
    eraseAction();
    return;
  }

  requestAnimationFrame(() => fallAnimate(clothes, pxByMs, maxYPx, currentTime, eraseAction));
};

const increaseWarehouse = (warehouse: WarehouseElement) => {
  if (!warehouse.element) throw new Error("warehouseはnullです");
  warehouse.currentScale = warehouse.currentScale * 1.04;
  warehouse.element.style.transform = `translate(-50%, -50%) scale(${warehouse.currentScale})`;
  if (warehouse.animationId) cancelAnimationFrame(warehouse.animationId);
  const currentTime = performance.now();
  warehouse.animationId = requestAnimationFrame(() => increaseWarehouseAnimate(warehouse, currentTime));
};

const increaseWarehouseAnimate = (
  warehouse: WarehouseElement,
  firstTime: number,
  moreAnimated: boolean = false,
  lessAnimated: boolean = false
): number => {
  const maxScale = warehouse.currentScale * 1.05;
  const nowScale = warehouse.currentScale;
  const moreAnimateTime = 50;
  const lessAnimateTime = 50 + moreAnimateTime;
  const moreFunction = (r: number) => {
    return maxScale * r + nowScale * (1 - r);
  };
  const lessFunction = (r: number) => {
    return maxScale * (1 - r) + nowScale * r;
  };
  if (moreAnimated === false) {
    moreAnimated = increaseWarehouseAnimatePlus(warehouse, moreAnimateTime, firstTime, moreFunction);
    console.log(moreAnimated);
  } else if (lessAnimated === false) {
    lessAnimated = increaseWarehouseAnimatePlus(warehouse, lessAnimateTime, firstTime, lessFunction);
  } else {
    warehouse.element.style.scale = `${warehouse.currentScale}px`;
    warehouse.animationId = null;
  }
  return requestAnimationFrame(() => increaseWarehouseAnimate(warehouse, firstTime, moreAnimated, lessAnimated));
};

const increaseWarehouseAnimatePlus = (
  warehouse: WarehouseElement,
  animateTime: number,
  firstTime: number,
  warehouseCul: (r: number) => number
): boolean => {
  if (!warehouse.element) throw new Error("warehouseはnullです");
  const currentTime = performance.now();
  const elapsedTime = currentTime - firstTime;
  if (elapsedTime > animateTime) return true;
  const ratio = elapsedTime / animateTime;
  const scale = warehouseCul(ratio);
  warehouse.element.style.transform = `translate(-50%, -50%) scale(${scale})`;
  return false;
};

const createRandomClothesElements = (n: number): Clothes[] => {
  const clothes: Clothes[] = [];
  for (let i = 0; i < n; i++) {
    clothes.push(createRandomClothesElement());
  }
  return clothes;
};
const createRandomClothesElement = (): Clothes => {
  const imgElement: HTMLImageElement = document.createElement("img");
  const randomIndex = Math.floor(Math.random() * imageSrcs.length);
  const src = imageSrcs[randomIndex];
  imgElement.style.width = "100px";
  imgElement.style.position = "absolute";
  imgElement.style.top = "0";
  imgElement.style.left = "50%";
  imgElement.style.transform = "translate(-50%,-50%)";
  imgElement.style.zIndex = "-10";
  imgElement.src = src;
  document.body.appendChild(imgElement);
  const clothes: Clothes = {
    element: imgElement,
    currenntTop: 0,
  };
  return clothes;
};

const explode = () => {};

const appearClothes = (clothes: Clothes[]) => {
  const getRandomX = () => {
    return Math.random() * window.innerWidth; // 画面幅の範囲でランダムにX座標を決める
  };

  // 画面内でランダムなY座標を生成
  const getRandomY = () => {
    return Math.random() * window.innerHeight; // 画面高さの範囲でランダムにY座標を決める
  };
  for (let i = 0; i < clothes.length; i++) {
    const scale = Math.random() * -0.5 + 7.5;
    const rotate = Math.random() * 360;
    const goalRotate = rotate + (Math.random() * 180 - 90);
    clothes[i].element.style.display = "inline";
    clothes[i].element.style.top = "0";
    clothes[i].element.style.left = "0";
    clothes[i].element.style.transform = "";
    clothes[i].element.style.zIndex = "10";
    gsap.fromTo(
      clothes[i].element, // 対象の要素
      {
        scale: 1, // 初期スケール (元のサイズ)
        x: window.innerWidth / 2, // 初期X座標 (画面の中央)
        y: window.innerHeight / 2, // 初期Y座標 (画面の中央)
        rotate: rotate,
      },
      {
        scale: scale, // 最終スケール (4倍に拡大)
        x: getRandomX(), // ランダムなX座標
        y: getRandomY(), // ランダムなY座標
        rotate: goalRotate,
        duration: 4, // アニメーション時間 (2秒)
        ease: "power2.out", // イージング（加速・減速）
      }
    );
  }
};

const decreaseWarehouse = (warehouse: WarehouseElement) => {
  gsap.to(warehouse.element, {
    scale: 0.1, // 1.5倍に拡大
    duration: 1, // 1秒間でアニメーション
    ease: "power2.out", // イージング（加速・減速）
  });
};

export default opening;
