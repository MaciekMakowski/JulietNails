import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { technicsList } from "../data/technics";
import Liqud from "../images/cm.png";
import TransHands from "../images/trans-hands.png";

const Technics = () => {
  const { ref: lbImageRef, inView: lbImageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: rbImageRef, inView: rbImageInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const generateTechnicsItems = () => {
    return technicsList.map((technic, index) => {
      const { ref, inView } = useInView({
        threshold: [0.1, 0.5, 1],
        triggerOnce: true,
      });
      return (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.5 + index * 0.2,
            exit: { duration: 0.3, delay: 0 },
          }}
          exit={{ opacity: 0, y: 100 }}
          key={index}
          ref={ref}
          className="technic-item"
        >
          <div className="technic-item-text">
            <h4 className="primary-font">{technic.title}</h4>
            <p className="secondary-font">{technic.descripiton}</p>
          </div>
          <img src={technic.img} alt={technic.alt} />
        </motion.div>
      );
    });
  };
  return (
    <section id="technics" data-title="Techniki">
      <div className="technics-container">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="technics-title primary-font"
        >
          Techniki stylizacji
        </motion.h3>
        <div className="technics-content">{generateTechnicsItems()}</div>
      </div>
      <motion.div
        ref={lbImageRef}
        initial={{ opacity: 0, y: 100 }}
        animate={lbImageInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="technics-image-lb-container"
      >
        <img
          src={TransHands}
          alt="Hands with nails"
          className="technics-image-lb"
        />
      </motion.div>
      <motion.div
        ref={rbImageRef}
        initial={{ opacity: 0, y: -300 }}
        animate={rbImageInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="technics-image-rb-container"
      >
        <img src={Liqud} alt="Liquid nails" className="technics-image-rb" />
      </motion.div>
    </section>
  );
};

export default Technics;
