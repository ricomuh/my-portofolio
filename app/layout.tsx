import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "./header";
import Body from "./body";

export const metadata = {
  title: {
    default: "Rico Muhammad",
    template: "%s | Rico Muhammad",
  },
  description: "Web and Game Developer",
  authors: { name: "Rico Muhammad" },
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
        {children}
      </Body>
    </html>
  );
}
