import React from "react";
import { motion } from "framer-motion";

interface SearchProps {
  // Add any props you need here
}

const Search: React.FC<SearchProps> = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-russianViolet"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.5 }}
    >
      <h1>Search</h1>
    </motion.div>
  );
};

export default Search;
