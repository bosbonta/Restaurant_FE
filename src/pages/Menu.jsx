import { useState } from "react";
import MenuItem from "../components/MenuItem";
import CartButton from "../components/CartButton";
import Footer from "../components/Footer";

const menuData = [
  { id: 1, name: "Burger Spesial", price: 30000, image: "/burger.jpg" },
  { id: 2, name: "Kopi Latte", price: 25000, image: "/coffee.jpg" },
  { id: 3, name: "Pizza", price: 50000, image: "/pizza.jpg" },
];

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Menu Restoran</h1>
      <div className="menu-list">
        {menuData.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <CartButton cartCount={cart.length} />
      <Footer />
    </div>
  );
}

export default Menu;
