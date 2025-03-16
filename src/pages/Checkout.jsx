import { useEffect, useState } from "react";
import OrderSummary from "../components/OrderSummary";
import Receipt from "../components/Receipt";
import Navbar from "../components/Navbar";

function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  return (
    <div>
      <Navbar />
      <OrderSummary cart={cart} />
      <Receipt cart={cart} />
    </div>
  );
}

export default Checkout;
