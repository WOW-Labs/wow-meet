import localFont from "next/font/local";

const medium = localFont({
  src: "./modu.ttf",
  weight: "500",
  display: "fallback",
  style: "normal",
  variable: "--modu-medium",
  fallback: ["system-ui"],
});

export { medium as moduMedium };
