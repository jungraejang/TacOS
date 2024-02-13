import React from "react";
import { motion } from "framer-motion";
import MainDesktop from "./MainDesktop";

const Home: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-tangerine"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <MainDesktop />
    </motion.div>
  );
};

export default Home;
