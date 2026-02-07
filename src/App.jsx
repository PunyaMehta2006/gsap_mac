import NavBar from "./Components/navbar";
import Hero from "./Components/Hero"
import ProductViewer from "./Components/ProductViewer";
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
    </main>
  )
}

export default App