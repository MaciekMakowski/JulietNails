import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const linkVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
    },
  }),
};

const mobileLinkVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.3,
    },
  }),
  exit: (index: number) => ({
    opacity: 0,
    y: -50,
    transition: {
      delay: index * 0.1,
      duration: 0.3,
    },
  }),
};

const Navigation = () => {
  const [links, setLinks] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const newLinks = Array.from(sections).map((section, index) => {
      const sectionID = section.id;
      const sectionTitle = section.dataset.title;
      return (
        <motion.a
          href={`#${sectionID}`}
          key={sectionID}
          className="nav-link"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={window.innerWidth < 768 ? mobileLinkVariants : linkVariants}
          custom={index}
          tabIndex={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {sectionTitle}
        </motion.a>
      );
    });
    setLinks(newLinks);
  }, []);

  return (
    <motion.nav className="navigation">
      <div className="logo">
        <a href="/">
          <h1>JulietNails</h1>
        </a>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-links mobile"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { height: 0, opacity: 0 },
              visible: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {links}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`nav-links desktop`}>{links}</div>
    </motion.nav>
  );
};

export default Navigation;
