import { useState, useEffect } from "react";
import foodItems from "./data";
import MenuGrid from "./components/MenuGrid";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Change the body's class whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-body");
    } else {
      document.body.classList.remove("dark-body");
    }
  }, [darkMode]);

  function addToCart(food) {
    const existingItem = cart.find((item) => item.id === food.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === food.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  }

  function removeFromCart(food) {
    const existingItem = cart.find((item) => item.id === food.id);

    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== food.id));
    } else {
      const updatedCart = cart.map((item) =>
        item.id === food.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      setCart(updatedCart);
    }
  }

  function clearCart() {
    setCart([]);
  }

  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setOrderPlaced(true);
  }

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const filteredFoods = foodItems.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {orderPlaced && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🎉 Order Placed!</h2>

            <p>Thank you for ordering.</p>

            <p>Your delicious food is on its way 🍔🍕🥤</p>

            <button
              onClick={() => {
                setOrderPlaced(false);
                clearCart();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <header className="navbar">
        <h1>🍔 Food Ordering Hub</h1>

        <div className="navbar-right">

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="cart-badge">
            🛒 {totalItems} Items
          </div>

        </div>
      </header>

      <div className="main-content">

        <div className="left-section">

          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Search your favourite food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <MenuGrid
            foods={filteredFoods}
            addToCart={addToCart}
          />

        </div>

        <CartSidebar
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          checkout={checkout}
        />

      </div>

    </div>
  );
}

export default App;