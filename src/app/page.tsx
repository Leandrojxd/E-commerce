import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={"Loading..."}>
        <Categories />
      </Suspense>
    </main>
  );
}
