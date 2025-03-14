import { useState } from "react";

function Receipt({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [receipt, setReceipt] = useState(null);

  const handleCheckout = async () => {
    const orderData = { items: cart, total };

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      setReceipt(data); // Simpan struk untuk ditampilkan
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan.");
    }
  };

  return (
    <div>
      <h2>Total Bayar</h2>
      <p>Rp {total.toLocaleString()}</p>
      <button onClick={handleCheckout}>Bayar Sekarang</button>

      {receipt && (
        <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}>
          <h3>Struk Pesanan</h3>
          <p><strong>Nomor Order:</strong> {receipt.orderNumber}</p>
          <p><strong>Pesanan Anda:</strong></p>
          <ul>
            {receipt.items.map((item, index) => (
              <li key={index}>{item.name} - Rp {item.price.toLocaleString()}</li>
            ))}
          </ul>
          <p><strong>Total:</strong> Rp {receipt.total.toLocaleString()}</p>
          <p><strong>Selamat!</strong> Pesanan Anda sedang diproses.</p>
        </div>
      )}
    </div>
  );
}

export default Receipt;
