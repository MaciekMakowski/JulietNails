import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import YouNaildIt from "../images/ab1.png";
import Ink from "../images/lik.png";
import Placeholder from "../images/placeholder.svg";

const AboutMe: React.FC = () => {
  const { ref: inkRef, inView: inkInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
  });
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section id="about" data-title="O mnie">
      <div className="aboutme-container">
        <div className="aboutme-content">
          <motion.div
            ref={inkRef}
            initial={{ opacity: 0, x: -100 }}
            animate={inkInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="ink-container"
          >
            <img src={Ink} alt="Obraz lakieru" className="ink-image" />
          </motion.div>
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -100 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="aboutme-text"
          >
            <h2 className="aboutme-title primary-font">O mnie</h2>
            <p className="secondary-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet enim nisi, vitae volutpat ligula pulvinar vel. Aenean at
              elit nisl. Quisque nulla ipsum, pellentesque nec ultricies quis,
              accumsan a eros. Sed porttitor vestibulum eros eget feugiat. In
              feugiat convallis vehicula. Praesent lacinia mi nec volutpat
              euismod. Vivamus eros lorem, pharetra vitae velit eu, finibus
              mollis erat. Maecenas tristique tempor justo, ut rutrum enim
              malesuada eget.
            </p>
            <p className="secondary-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet enim nisi, vitae volutpat ligula pulvinar vel. Aenean at
              elit nisl. Quisque nulla ipsum, pellentesque nec ultricies quis,
              accumsan a eros. Sed porttitor vestibulum eros eget feugiat. In
              feugiat convallis vehicula. Praesent lacinia mi nec volutpat
              euismod. Vivamus eros lorem, pharetra vitae velit eu, finibus
              mollis erat. Maecenas tristique tempor justo, ut rutrum enim
              malesuada eget.
            </p>
          </motion.div>
          <div className="aboutme-footer" ref={footerRef}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={footerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="aboutme-logo"
            >
              <img src={YouNaildIt} alt="Logo" />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="contact-button"
            >
              Napisz do mnie
            </motion.button>
          </div>
        </div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="aboutme-image"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="image-wrapper"
          >
            <img src={Placeholder} alt="Portert" className="portrait" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
