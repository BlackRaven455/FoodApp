import styles from "./fooditem.module.css";

export default function FoodItem({ item, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={item.image} alt="${item.title}" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            // item.filter((foodItem) => item.id);
            setFoodId(item.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
