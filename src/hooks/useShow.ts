import { gsap } from "gsap";
import { useLayoutEffect } from "react";

interface UseShowProps {
  ref: React.RefObject<HTMLDivElement>;
  delay: number;
}

export const useShow = ({ ref, delay }: UseShowProps) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    if (ref.current) {
      tl.fromTo(
        ref.current,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
      tl.delay(delay);
    }
    return () => {
      tl.kill();
    };
  }, []);
};
