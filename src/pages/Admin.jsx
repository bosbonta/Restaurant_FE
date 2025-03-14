import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);

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

    // Fungsi untuk menghapus pesanan
    const handleDeleteOrder = async (id) => {
        if (!window.confirm("Apakah Anda yakin ingin menghapus pesanan ini?")) return;
    
        try {
          await fetch(`http://localhost:5000/api/orders/${id}`, {
            method: "DELETE",
          });
          setOrders(orders.filter(order => order._id !== id));
        } catch (error) {
          console.error("Error:", error);
        }
      };    

      return (
        <div>
          <h1>Daftar Pesanan</h1>
          <table border="1">
          <thead>
  <tr>
    <th>No</th>
    <th>Nomor Order</th>
    <th>Items</th>
    <th>Total</th>
    <th>Tanggal</th>
    <th>Aksi</th>
  </tr>
</thead>
<tbody>
  {orders.map((order, index) => (
    <tr key={order._id}>
      <td>{index + 1}</td>
      <td>{order.orderNumber}</td>
      <td>
        {order.items.map((item) => (
          <div key={item.name}>{item.name}</div>
        ))}
      </td>
      <td>Rp {order.total.toLocaleString()}</td>
      <td>{new Date(order.date).toLocaleString()}</td>
      <td>
        <button onClick={() => handleDeleteOrder(order._id)}>Hapus</button>
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>
      );
}

export default Admin;
