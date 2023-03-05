import HeroSection from "./heroSection";

export const metadata = {
  title: "Rico Muhammad",
  description: "Web and Game Developer",
};

export default function Home() {
  return (
    <main className="dark:bg-gray-800">
      {/* @ts-expect-error */}
      <HeroSection />
    </main>
  );
}
