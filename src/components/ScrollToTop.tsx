import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const FALLBACK_HEADER_OFFSET = 112;

function getHeaderOffset() {
  const headerShell = document.querySelector("[data-site-header-shell]");

  if (!(headerShell instanceof HTMLElement)) {
    return FALLBACK_HEADER_OFFSET;
  }

  return Math.ceil(headerShell.getBoundingClientRect().height) + 16;
}

export default function ScrollToTop() {
  const { hash, pathname, search } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlBehavior = html.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    // Force route changes to snap to the top even when the site uses smooth scrolling globally.
    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    html.scrollTop = 0;
    body.scrollTop = 0;

    let restored = false;
    const restoreScrollBehavior = () => {
      if (restored) {
        return;
      }

      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
      restored = true;
    };

    const frameId = window.requestAnimationFrame(restoreScrollBehavior);

    return () => {
      window.cancelAnimationFrame(frameId);
      restoreScrollBehavior();
    };
  }, [hash, pathname, search]);

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let frameId = 0;
    let timeoutId = 0;
    let attempts = 0;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);

      if (!target) {
        if (attempts < 12) {
          attempts += 1;
          frameId = window.requestAnimationFrame(scrollToTarget);
        }
        return;
      }

      const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    timeoutId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(scrollToTarget);
    }, 40);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [hash, pathname, search]);

  return null;
}
