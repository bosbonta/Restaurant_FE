function BestSeller() {
    return (
      <section className="best-seller">
        <h2>Menu Best Seller</h2>
        <div className="menu-list">
          <div className="menu-item">
            <img src="/burger.jpg" alt="Burger" />
            <h3>Burger Spesial</h3>
            <p>Rp 30.000</p>
          </div>
          <div className="menu-item">
            <img src="/coffee.jpg" alt="Kopi" />
            <h3>Kopi Latte</h3>
            <p>Rp 25.000</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default BestSeller;
  