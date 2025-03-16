import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Navbar() {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <nav className="w-screen bg-teal-500 h-fit overflow-hidden">
      <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
        {/* Nama Restoran */}
        <div>
          <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">
            Warung Pojok
          </h1>
        </div>

        {/* Menu Navbar */}
        <div className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center" id="navItems">
          <button onClick={() => navigate("/")} className="group">
            Home
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500" />
          </button>
          <button onClick={() => navigate("/menu")} className="group">
            Menu
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500" />
          </button>
          <button onClick={() => navigate("/admin")} className="group">
            Admin
            <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500" />
          </button>
        </div>

        {/* Icon Hamburger (Bisa dibuat interaktif nanti) */}
        <div id="hamburger" className="fa fa-bars flex items-center text-xl" style={{ display: 'none' }} />

        {/* Mobile Navigation (Jika Mau Interaktif, Tambahkan State di React) */}
        <div id="mobileNav" className="fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] left-[-70%] ease-in-out duration-500 cursor-pointer">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/menu")}>Menu</button>
        </div>
      </div>
    </nav>
  );
}
