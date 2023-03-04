import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "./header";
import Body from "./body";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    default: "Rico Muhammad",
    template: "%s | Rico Muhammad",
  },
  description: "Web and Game Developer",
  creator: "Rico Muhammad",
  keywords: [
    "Rico Muhammad",
    "Web Developer",
    "Game Developer",
    "Leolit Games",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Body>
        <Header>
          {/* @ts-expect-error */}
          <Navbar />
        </Header>
        <main>{children}</main>
        <Footer />
      </Body>
    </html>
  );
}
