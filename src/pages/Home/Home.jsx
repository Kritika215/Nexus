import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Technology from "../../components/home/Technologies/Technology";
import Problems from "../../components/home/Problems/Problems";
import Workflow from "../../components/home/Workflow/Workflow";
import Features from "../../components/home/Features/Features";
import Footer from "../../components/layout/Footer/Footer";
import About from "../../components/home/About/About";
import Solution from "../../components/home/Solution/Solution";
import FAQ from "../../components/home/FAQ/FAQ";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Problems />
      <Solution />
      <Workflow />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;