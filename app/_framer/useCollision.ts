// app/_hooks/useCollision.ts
import { useEffect, useState } from "react";

interface Rect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export const useCollision = (ref: React.RefObject<HTMLElement>) => {
  const [rect, setRect] = useState<Rect | null>(null);

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        const { left, right, top, bottom } =
          ref.current.getBoundingClientRect();
        setRect({ left, right, top, bottom });
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, [ref]);

  return rect;
};
