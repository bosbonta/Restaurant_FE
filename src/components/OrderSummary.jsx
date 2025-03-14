function OrderSummary({ cart }) {
    return (
      <div>
        <h2>Ringkasan Pesanan</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rp {item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default OrderSummary;
  