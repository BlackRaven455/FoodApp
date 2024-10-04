import Item from "./Item.jsx";

export default function ItemList({ food }) {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        food.extendedIngredients.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Item item={item} />
        ))
      }
    </div>
  );
}
