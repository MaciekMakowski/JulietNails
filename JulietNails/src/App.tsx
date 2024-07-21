import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import Navigation from "./components/navigation";
import "./styles/index.css";
function App() {
  return (
    <>
      <AnimatePresence>
        <Navigation />
        <main>
          <Home />
          <section id="about" data-title="O mnie"></section>
          <section id="stylizations" data-title="Stylizacje"></section>
          <section id="technics" data-title="Techniki"></section>
          <section id="courses" data-title="Szkolenia"></section>
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
