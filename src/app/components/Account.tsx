import React from "react";
import { motion } from "framer-motion";

const Account: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-folly"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h1>Account</h1>
      <p>This is the Account page.</p>
    </motion.div>
  );
};

export default Account;
