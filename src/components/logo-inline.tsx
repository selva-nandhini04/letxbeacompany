import logoPurple from "../assets/3.png";
import logoWhite from "../assets/2.png";

interface LogoInlineProps {
  variant?: "auto" | "white" | "black";
}

/**
 * Renders the brand X logo inline with surrounding text.
 *
 * Sizing uses inline CSS `em` units so it is ALWAYS relative to the
 * parent element's font-size — no Tailwind JIT purge issues.
 *
 * Do NOT put spaces around this component in JSX.
 * The component adds its own proportional horizontal margin.
 */
const imgStyle: React.CSSProperties = {
  display: "inline-block",
  width: "1.15em",
  height: "1.15em",
  objectFit: "contain",
  verticalAlign: "-0.35em",
  margin: "0 0.12em",
};

export function LogoInline({ variant = "auto" }: LogoInlineProps) {
  // Use white logo ONLY when explicitly requested (e.g. inside a purple button/badge)
  if (variant === "white") {
    return <img src={logoWhite} alt="x" style={imgStyle} />;
  }

  // Use the purple logo for EVERYTHING else across both light and dark themes
  return <img src={logoPurple} alt="x" style={imgStyle} />;
}
