function CartSidebar({
cart,
totalItems,
totalPrice,
addToCart,
removeFromCart,
clearCart,
checkout,
}) {
  return (
    <div className="cart-sidebar">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>🛒</h1>
          <p>Your cart is empty</p>
          <small>Add something delicious 🍕</small>
        </div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">

            <div className="cart-item-info">

              <p className="item-name">
                {item.name}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>

            </div>

          </div>
        ))
      )}

      <hr />

      <h3>Total Items: {totalItems}</h3>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button
        className="checkout"
        onClick={checkout}
      >
        Checkout
      </button>

      <button
        className="clear-cart"
        onClick={clearCart}
      >
        Clear Cart
      </button>

    </div>
  );
}

export default CartSidebar;