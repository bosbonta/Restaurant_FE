import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [alert, setAlert] = useState(null);
  const alertRef = useRef(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchOrders();
  }, []);

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });
    if (alertRef.current) {
      clearTimeout(alertRef.current);
    }
    alertRef.current = setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleDeleteOrder = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/orders/${id}`, {
        method: "DELETE",
      });
      setOrders(orders.filter((order) => order._id !== id));
      showAlert("Pesanan berhasil dihapus!", "success");
    } catch (error) {
      console.error("Error:", error);
      showAlert("Gagal menghapus pesanan!", "error");
    }
  };

  const handleDeleteAllOrders = async () => {
    if (!confirm("Apakah Anda yakin ingin menghapus SEMUA pesanan?")) return;
    try {
      await fetch("http://localhost:5000/api/orders", { method: "DELETE" });
      setOrders([]);
      showAlert("Semua pesanan berhasil dihapus!", "success");
    } catch (error) {
      console.error("Error:", error);
      showAlert("Gagal menghapus semua pesanan!", "error");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Daftar Pesanan
        </h1>

        {/* Alert */}
        {alert && (
          <div
            className={`mb-4 p-3 text-white rounded ${
              alert.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {alert.message}
          </div>
        )}

        {/* Tombol Hapus Semua */}
        {orders.length > 0 && (
          <button
            onClick={handleDeleteAllOrders}
            className="mb-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Hapus Semua Pesanan
          </button>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Nomor Order</th>
                <th className="px-4 py-2 border">Items</th>
                <th className="px-4 py-2 border">Total</th>
                <th className="px-4 py-2 border">Tanggal</th>
                <th className="px-4 py-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="border">
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border text-center">
                    {order.orderNumber}
                  </td>
                  <td className="px-4 py-2 border">
                    {order.items.map((item) => (
                      <div key={item.name}>{item.name}</div>
                    ))}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    Rp {order.total.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {new Date(order.date).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    Tidak ada pesanan saat ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
