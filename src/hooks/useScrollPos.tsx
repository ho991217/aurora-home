import { useEffect, useState } from "react";

/**
 * @description 현재 페이지 번호를 가져온다.
 * @returns scroll position
 */
export const useScrollPos = () => {
  const [page, setPage] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPage(Math.floor(window.scrollY / window.innerHeight));
      setScrollPos(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return { page, scrollPos };
};
