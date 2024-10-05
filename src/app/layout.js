import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "OCUB | Dashboard",
  description: "OCUB (Ocean Capp Unviversity of Bangladesh)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={poppins.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
