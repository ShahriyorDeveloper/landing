import localFont from "next/font/local";

const greycliff = localFont({
  src: [
    {
      path: "./GreycliffCF-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./GreycliffCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-greycliff",
  display: "swap", // Optional: Choose "swap", "fallback", etc.
});

export default greycliff;
