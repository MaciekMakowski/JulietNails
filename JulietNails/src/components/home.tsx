import { motion } from "framer-motion";
import CM from "../images/cm.png";
import TransHands from "../images/trans-hands.png";
import WhiteHands from "../images/white-hands.png";
const Home = () => {
  return (
    <section id="home" data-title="Strona główna">
      <div className="welcome-text">
        <h2 className="primary-font">Hej jestem</h2>
        <h1 className="primary-font">Julia,</h1>
      </div>
      <div className="description-text">
        <h4 className="secondary-font">
          Jestem zapaloną stylistką paznokci z wielką pasją w tworzeniu
          niekonwencjonalnych kompozycji.{" "}
        </h4>
        <h5 className="secondary-font">
          Więcej o mnie, moich umiejętnościach oraz moim doświadczeniu
          znajdziesz poniżej.
        </h5>
      </div>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="cm-container"
      >
        <img src={CM} alt="Obraz lakieru" className="cm-image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lb-container"
      >
        <img
          src={TransHands}
          alt="Ręce z paznokciami"
          className="main-trans-hands"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          transform: "translateY(50%) translateX(50%)",
        }}
        animate={{ opacity: 1, x: 0, transform: "translateY(50%)" }}
        transition={{ duration: 1 }}
        className="rm-container"
      >
        <img
          src={WhiteHands}
          alt="Białe ręce z paznokciami"
          className="main-white-hands"
        />
      </motion.div>
    </section>
  );
};

export default Home;
