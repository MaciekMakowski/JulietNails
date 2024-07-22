import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { stylizations } from "../data/stylizations";
import HandsImage from "../images/trans-hands.png";

interface StylizationType {
  id: number;
  title: string;
  description: string;
  img: string;
}

const Stylizations = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const createStylizations = () => {
    const stylizationsPages: any[] = [];
    let page: any[] = [];
    stylizations.forEach((stylization, index) => {
      page.push(stylization);
      if ((index + 1) % 10 === 0 || index === stylizations.length - 1) {
        stylizationsPages.push(page);
        page = [];
      }
    });

    return stylizationsPages.map((page, index) => {
      const { ref, inView } = useInView({
        threshold: [0.1, 0.5, 1],
      });

      return (
        <div key={index} ref={ref} className="stylizations-gallery">
          {page.map(
            (stylization: StylizationType, stylizationIndex: number) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.5 + (stylizationIndex % 11) * 0.1,
                  exit: { duration: 0.3, delay: 0 },
                }}
                exit={{ opacity: 0, y: 100 }}
                key={stylization.id}
                className="stylization"
              >
                <img src={stylization.img} alt={stylization.title} />
              </motion.div>
            )
          )}
        </div>
      );
    });
  };

  return (
    <section id="stylizations" data-title="Stylizacje">
      <div className="stylizations-container">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="stylizations-title primary-font"
        >
          Moje stylizacje
        </motion.h3>
        <Slider {...settings}>{createStylizations()}</Slider>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="stylizations-image"
      >
        <img src={HandsImage} alt="Image of hands in background" />
      </motion.div>
    </section>
  );
};

export default Stylizations;
