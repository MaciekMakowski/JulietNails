import { AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AboutMe from "./components/aboutme";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Stylizations from "./components/stylizations";
import "./styles/index.css";
function App() {
  return (
    <>
      <AnimatePresence>
        <Navigation />
        <main>
          <Home />
          <AboutMe />
          <Stylizations />
          <section id="technics" data-title="Techniki"></section>
          <section id="courses" data-title="Szkolenia"></section>
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
