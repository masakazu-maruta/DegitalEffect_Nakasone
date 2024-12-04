import gsap from "gsap";
export default class FadeAnim {
  public fadeIn = (element: HTMLElement, duration: number, onComplete: () => void) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: duration,
        onComplete: () => {
          onComplete();
        },
      }
    );
  };
  public fadeOut = (element: HTMLElement, duration: number, onComplete: () => void) => {
    gsap.fromTo(
      element,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: duration,
        onComplete: () => {
          onComplete();
        },
      }
    );
  };
}
