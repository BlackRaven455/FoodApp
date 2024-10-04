import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList.jsx";
import Item from "./Item.jsx";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "41528b9fa7e34499927201a171148b8d";
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }

    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👦Serves: {food.servings}</strong>
          </span>
          <span>
            {" "}
            <strong>
              {food.vegeterian ? "✅Vegeterian" : "❌Non-Vegeterian"}
            </strong>
          </span>
          <span>
            {" "}
            <strong>{food.vegan ? "✅Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            ¥{Math.round((food.pricePerServing / 100) * 146.59)} Per serving
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          {isLoading ? <p>Loading...</p> : <ItemList food={food} />}

          <h2> Instruction</h2>

          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step, index) => (
                  <li key={index}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
