import React from "react";
import { motion } from "framer-motion";

const Archive: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-rosyBrown"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h1>Archive</h1>
    </motion.div>
  );
};

export default Archive;
