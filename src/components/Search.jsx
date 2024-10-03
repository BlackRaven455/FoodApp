import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "41528b9fa7e34499927201a171148b8d";

export default function Search({ foodData, setFoodData }) {
  const [search, setSearch] = useState("pasta");
  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }

    fetchRecipes();
  }, [search]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
        type={"text"}
        value={search}
      />
    </div>
  );
}
