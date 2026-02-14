import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero"
import ProductViewer from "./Components/ProductViewer";
import Showcase from "./Components/Showcase";
import Performance from "./Components/Performance";
import Features from "./Components/Features";
import Highlights from "./Components/Highlights"
import Footer from "./Components/Footer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
// allows it to render globally

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App