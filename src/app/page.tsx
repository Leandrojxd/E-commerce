import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";
import { SkeletonTheme } from "react-loading-skeleton";

export default async function Home() {
  return (
    <main>
      <Header />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Categories />
      </SkeletonTheme>
    </main>
  );
}
