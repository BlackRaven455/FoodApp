import FoodItem from "./FoodItem.jsx";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((item) => (
        <FoodItem key={item.id} item={item} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
