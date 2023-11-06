import "../App.scss";
// import "slick";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jobi",
  description: "Your first stop to find a job!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>{children}</body>
    </html>
  );
}
