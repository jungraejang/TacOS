import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-tangerine"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h1>Welcome to the Home component!</h1>
    </motion.div>
  );
};

export default Home;
