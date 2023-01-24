import { useEffect } from "react";
import { useState } from "react";

export const useIsOnTop = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollPos(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return scrollPos === 0;
};
