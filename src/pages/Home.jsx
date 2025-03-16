import Footer from "../components/Footer";
import BestSeller from "../components/BestSeller";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/Navbar";
import Header from "../components/Header";


function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BestSeller />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
