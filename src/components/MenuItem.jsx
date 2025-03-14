function MenuItem({ item, addToCart }) {
    return (
      <div className="menu-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Rp {item.price.toLocaleString()}</p>
        <button onClick={() => addToCart(item)}>Tambah ke Keranjang</button>
      </div>
    );
  }
  
  export default MenuItem;
  