import React from "react";
import { motion } from "framer-motion";
import MainDesktop from "./MainDesktop";

const Home: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen w-full"
      style={{
        backgroundImage: 'url("/tacos-bg.png")', // Assuming cannaOS-bg.png is in the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0,
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <MainDesktop />
    </motion.div>
  );
};

export default Home;
