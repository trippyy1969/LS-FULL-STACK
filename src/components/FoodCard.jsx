function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <img
        src={food.image}
        alt={food.name}
      />

      <h2>{food.name}</h2>

      <p>₹{food.price}</p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;