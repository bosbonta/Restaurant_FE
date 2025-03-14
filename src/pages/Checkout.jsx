import { useEffect, useState } from "react";
import OrderSummary from "../components/OrderSummary";
import Receipt from "../components/Receipt";

function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      <OrderSummary cart={cart} />
      <Receipt cart={cart} />
    </div>
  );
}

export default Checkout;
