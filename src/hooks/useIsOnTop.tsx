import { useEffect } from "react";
import { useState } from "react";

export const useIsOnTop = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    document.body.addEventListener("scroll", (e) => {
      console.log(e);

      setScrollPos(window.scrollY);
    });
    return () => {
      document.body.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    console.log(scrollPos);
  }, [scrollPos]);
  return scrollPos === 0;
};
