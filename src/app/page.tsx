import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function Home() {
  return <div>
    <Navbar />
    <HeroSection />
    <About />
    <Menu />
  </div>
}
