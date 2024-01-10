import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loading/>}>
        <Categories />
      </Suspense>
    </main>
  );
}
