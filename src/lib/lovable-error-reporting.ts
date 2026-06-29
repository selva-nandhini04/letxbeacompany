/**
 * Generic error reporting utility.
 * Captures errors from React error boundaries and logs them.
 */
type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
  _options: ErrorOptions = {}
) {
  if (typeof window === "undefined") return;
  console.error("[Error Boundary]", error, context);
}
