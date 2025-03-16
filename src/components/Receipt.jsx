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
      setReceipt(data);
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan.");
    }
  };

  return (
    <div className="border border-gray-200 shadow-lg rounded-lg p-6 bg-white w-full max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Total Bayar</h2>
      <p className="text-lg font-medium text-gray-700">
        Rp {total.toLocaleString()}
      </p>
      <button
        onClick={handleCheckout}
        className="mt-4 w-full rounded-md bg-green-600 px-5 py-3 text-white font-medium uppercase tracking-wide transition hover:bg-green-700"
      >
        Bayar Sekarang
      </button>

      {receipt && (
        <div className="mt-6 border border-gray-300 rounded-lg p-4 text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Struk Pesanan
          </h3>
          <p className="text-sm text-gray-700">
            <strong>Nomor Order:</strong> {receipt.orderNumber}
          </p>
          <p className="text-sm text-gray-700 font-medium mt-2">
            Pesanan Anda:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {receipt.items.map((item, index) => (
              <li key={index}>
                {item.name} - Rp {item.price.toLocaleString()}
              </li>
            ))}
          </ul>
          <p className="text-sm font-semibold text-gray-900 mt-4">
            <strong>Total:</strong> Rp {receipt.total.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 font-medium mt-2">
            Selamat! Pesanan Anda sedang diproses.
          </p>
        </div>
      )}
    </div>
  );
}

export default Receipt;
