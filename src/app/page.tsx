import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback="Loading from suspense">
        <Categories />
      </Suspense>
    </main>
  );
}
