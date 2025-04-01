import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import TestimonialsAndBlogs from "./components/TestimonialsAndBlogs";
import Ourprocess from "./components/Ourprocess";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <Ourprocess />
      <TestimonialsAndBlogs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
