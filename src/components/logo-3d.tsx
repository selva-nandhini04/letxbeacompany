import { lazy, Suspense, useEffect, useState, useRef } from "react";

// Lazy-load the actual scene — this is the key fix for SSR.
const Logo3DScene = lazy(() =>
  import("./logo-3d-scene").then((m) => ({ default: m.Logo3DScene }))
);

export function Logo3D() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Defer WebGL loading slightly after mount to let the page animate in smoothly
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Use IntersectionObserver to render/load the Canvas only when it's in or close to the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "100px", // Start loading 100px before entering viewport
        threshold: 0.01,
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[280px] sm:min-h-[380px] md:min-h-[450px] flex items-center justify-center">
      {mounted && isVisible ? (
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white/80" />
            </div>
          }
        >
          <Logo3DScene />
        </Suspense>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white/80" />
        </div>
      )}
    </div>
  );
}
