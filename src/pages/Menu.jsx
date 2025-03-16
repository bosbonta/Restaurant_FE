import { useState } from "react";
import MenuItem from "../components/MenuItem";
import CartButton from "../components/CartButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageGallery1 from "../assets/img/menu-item-0.png";
import ImageGallery2 from "../assets/img/menu-item-1.png";
import ImageGallery3 from "../assets/img/menu-item-2.png";
import ImageGallery4 from "../assets/img/menu-item-3.png";
import ImageGallery5 from "../assets/img/menu-item-4.png";
import ImageGallery6 from "../assets/img/menu-item-5.png";
import ImageGallery7 from "../assets/img/menu-item-6.png";
import ImageGallery8 from "../assets/img/menu-item-7.png";
import ImageGallery9 from "../assets/img/menu-item-8.png";
import ImageGallery10 from "../assets/img/menu-item-9.png";
import ImageGallery11 from "../assets/img/menu-item-10.png";
import ImageGallery12 from "../assets/img/menu-item-11.png";
import ImageGallery13 from "../assets/img/menu-item-12.png";
import ImageGallery14 from "../assets/img/menu-item-13.png";
import ImageGallery15 from "../assets/img/menu-item-14.png";
import ImageGallery16 from "../assets/img/menu-item-15.png";
import ImageGallery17 from "../assets/img/menu-item-16.png";

const menuData = [
  {
    id: 1,
    name: "Salad Sayur",
    price: 34900,
    image: ImageGallery1,
  },
  {
    id: 2,
    name: "Tahu Sambal Bacem",
    price: 25000,
    image: ImageGallery2,
  },
  {
    id: 3,
    name: "Lumpia Udang",
    price: 29000,
    image: ImageGallery3,
  },{
    id: 4,
    name: "Spageti Bolognese",
    price: 35000,
    image: ImageGallery4,
  },{
    id: 5,
    name: "Healty Food",
    price: 25000,
    image: ImageGallery5,
  },{
    id: 6,
    name: "Beef Steak",
    price: 55000,
    image: ImageGallery6,
  },{
    id: 7,
    name: "Nugget & Fries",
    price: 20000,
    image: ImageGallery7,
  },{
    id: 8,
    name: "Healty Food 2",
    price: 15000,
    image: ImageGallery8,
  },{
    id: 9,
    name: "Makaroni Schotel",
    price: 42000,
    image: ImageGallery9,
  },{
    id: 10,
    name: "Chicken Steak",
    price: 50000,
    image: ImageGallery10,
  },
  {
    id: 11,
    name: "Jus Jeruk Manis",
    price: 7000,
    image: ImageGallery11,
  },
  {
    id: 12,
    name: "Teh Manis Dingin",
    price: 5000,
    image: ImageGallery12,
  },
  {
    id: 13,
    name: "Sprite Dingin",
    price: 7000,
    image: ImageGallery13,
  },
  {
    id: 14,
    name: "Jus Strawberry",
    price: 12000,
    image: ImageGallery14,
  },
  {
    id: 15,
    name: "Es Jeruk Soda",
    price: 12000,
    image: ImageGallery15,
  },{
    id: 16,
    name: "Pop Ice",
    price: 5000,
    image: ImageGallery16,
  },
  {
    id: 17,
    name: "Coca Cola",
    price: 6000,
    image: ImageGallery17,
  },
];

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    
    <div>
      <Navbar />
      <div className="container px-6 py-10 mx-auto">
      <div className="lg:flex lg:items-start">

          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Menu Makanan
              </h1>
              <div>
                <span className="inline-block w-40 h-1 rounded-full bg-teal-500" />
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-500" />
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-500" />
              </div>
            </div>

            <div className="menu-list flex flex-col space-y-6 w-5/6">
            {menuData
                .filter((item) => item.id < 10)
                .map((item) => (
                  <MenuItem key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
            <CartButton cartCount={cart.length} />
          </div>

          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Menu Minuman
              </h1>
              <div>
                <span className="inline-block w-40 h-1 rounded-full bg-teal-500" />
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-500" />
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-500" />
              </div>
            </div>

             {/* Filter hanya ID >= 9 (Minuman) */}
             <div className="menu-list flex flex-col space-y-6 h-5/6 overflow-y-auto self-start">

              {menuData
                .filter((item) => item.id > 10)
                .map((item) => (
                  <MenuItem key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
            <CartButton cartCount={cart.length} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
