import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";

export default async function Home() {
  return (
    <main>
      <Header />
      <Categories />
    </main>
  );
}
