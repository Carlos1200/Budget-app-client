import { gsap } from "gsap";

interface UseAnimationProps {
  ref: React.RefObject<HTMLDivElement>;
}

export const useAnimation = ({ ref }: UseAnimationProps) => {
  const ChangeVisibility = (callback: () => void) => {
    const tl = gsap.timeline();
    tl.to(ref.current, {
      duration: 0.5,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: callback,
    });

    tl.to(ref.current, {
      duration: 0.5,
      opacity: 1,
      ease: "power2.inOut",
    });
  };

  return { ChangeVisibility };
};
