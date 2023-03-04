import "./globals.css";

export const metadata = {
  title: "Rico Muhammad",
  description: "Web and Game Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
