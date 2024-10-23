import Home from "../components/Home";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
     <Nav/>
     <Home/>
     <Services/>
     <Banner/>
     <Testimonials/>
     <Footer/>
    </>
  );
}