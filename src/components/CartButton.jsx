import { useNavigate } from "react-router-dom";

function CartButton({ cartCount }) {
  const navigate = useNavigate();

  return (
    <button className="cart-button" onClick={() => navigate("/checkout")}>
      🛒 Keranjang ({cartCount})
    </button>
  );
}

export default CartButton;
