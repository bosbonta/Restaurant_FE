function MenuItem({ item, addToCart }) {
  return (
      <div className="flex items-center border border-gray-100 shadow-lg rounded-lg overflow-hidden p-4 bg-white">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-40 object-cover rounded-lg"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
          <p className="text-gray-700">Rp {item.price.toLocaleString()}</p>
        </div>
        <button
          onClick={() => addToCart(item)}
          className="ml-auto rounded-md border border-indigo-900 bg-indigo-900 px-4 py-2 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
  );
}

export default MenuItem;
