import Categories from "@/components/templates/Categories";
import Header from "@/components/templates/Header";
import Products from "@/components/templates/Products";

export default async function Home() {
  return (
    <main>
      <Header />
      <Categories />
      <Products />
    </main>
  );
}
