import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Main = ({ children, router }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll({top: 0, behavior: 'smooth'});
    }, 300)
  }, [router.route]);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.main
          className="max-w-screen-lg mx-auto p-8"
          style={{ minHeight: "calc(100vh - 12rem)" }}
          key={router.route}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Main;