function OrderSummary({ cart }) {
  return (
    <div className="container px-6 py-10 mx-auto">
    <div className="border border-gray-200 shadow-lg rounded-lg p-6 bg-white w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Ringkasan Pesanan</h2>
      <ul className="divide-y divide-gray-200">
        {cart.map((item, index) => (
          <li key={index} className="py-2 flex justify-between text-gray-700">
            <span>{item.name}</span>
            <span className="font-medium">Rp {item.price.toLocaleString()}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between font-semibold text-gray-900">
        <span>Total</span>
        <span>Rp {cart.reduce((total, item) => total + item.price, 0).toLocaleString()}</span>
      </div>
    </div>
    </div>
  );
}

export default OrderSummary;