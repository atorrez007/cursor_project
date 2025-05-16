import Navbar from "@/components/Navbar";
import Terminal from "@/components/Terminal";

export const metadata = {
  title: "Search Page",
  description: "Search page of the application",
};

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
        <Terminal />
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          This is the search page
        </p>
      </main>
    </div>
  );
}
