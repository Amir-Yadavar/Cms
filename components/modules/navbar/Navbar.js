import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {

  const [search, setSearch] = useState("")

  const route = useRouter()

  //  searchHandler
  const searchHandler = () => {
    if (search.trim()) {

      route.push(`/search?q=${search}`)
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input
          type="text"
          placeholder="جستجو کنید...."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span className={styles.navbar_search_icon} onClick={searchHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div className={styles.navbar_user_avatar}>
        <img src="" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
