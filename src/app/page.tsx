import Navbar from "@/components/Navbar";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
        <Terminal />
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          This is a clean, centered layout using Next.js and Tailwind CSS
        </p>
      </main>
    </div>
  );
}
