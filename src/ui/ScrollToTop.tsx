"use client";

import { useLayoutEffect } from "react";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const lenis = useLenis();

  useLayoutEffect(() => {
    /*
     * Reset page position immediately.
     * No visible smooth animation is used
     * when opening a new route.
     */
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });

      return;
    }

    /*
     * Fallback before Lenis is ready.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [lenis]);

  return null;
}