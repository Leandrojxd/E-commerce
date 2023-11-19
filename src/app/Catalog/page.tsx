import SortButton from "@/components/atoms/SortButton";
import ProductCard from "@/components/organism/ProductCard";
import Search from "@/components/organism/Search";
import Categories from "@/components/templates/Categories";


export default function Catalog() {
  return (
    <main>
      <Search />
      <SortButton/>
      <Categories/>
      <ProductCard/>
    </main>
  )
}
