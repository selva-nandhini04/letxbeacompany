import { lazy, Suspense, useEffect, useState } from "react";

// Lazy-load the actual scene — this is the key fix for SSR.
// React.lazy only runs in the browser, never on the server.
const Logo3DScene = lazy(() =>
  import("./logo-3d-scene").then((m) => ({ default: m.Logo3DScene }))
);

export function Logo3D() {
  // Only render on the client (avoids SSR crash with WebGL/three.js)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white/80" />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white/80" />
        </div>
      }
    >
      <Logo3DScene />
    </Suspense>
  );
}
