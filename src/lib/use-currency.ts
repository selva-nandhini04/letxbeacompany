/**
 * Detects whether the visitor is from India based on their system timezone
 * and returns the appropriate currency symbol and label.
 */
export function useCurrency() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isIndia = timezone === "Asia/Calcutta" || timezone === "Asia/Kolkata";
  return isIndia
    ? { symbol: "₹", label: "INR", locale: "en-IN", isIndia: true }
    : { symbol: "$", label: "USD", locale: "en-US", isIndia: false };
}
