import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import BestSeller from "../components/BestSeller";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-7xl font-bold text-center">
          <span className="inline-block animate-pulse scale-100 group-hover:scale-150 transition-transform duration-500 pulse-warung">
    Warung
  </span>
  <br />
  <span className="inline-block animate-pulse scale-100 group-hover:scale-150 transition-transform duration-500 pulse-pojok">
    Pojok
  </span>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <BestSeller />
          <Testimonial />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
