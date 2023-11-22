import SortButton from "../atoms/SortButton"
import Search from "./Search"
import styles from 'public/home.module.css'

function FilterSearchBar() {
  return (
    <div className={styles.filter_search_bar_position}>   
        <Search />
        <SortButton/>
    </div>
  )
}

export default FilterSearchBar