import Footer from "../components/Footer";
import BestSeller from "../components/BestSeller";
import Testimonial from "../components/Testimonial";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="home-header">
        <h1>Nama Restoran</h1>
        <p>Tagline Menarik di Sini</p>
        <button onClick={() => navigate("/menu")}>Lihat Menu</button>
      </header>

      {/* Menampilkan menu best seller */}
      <BestSeller />

      {/* Testimonial pelanggan */}
      <Testimonial />

      {/* Footer dengan peta & kontak */}
      <Footer />
    </div>
  );
}

export default Home;
