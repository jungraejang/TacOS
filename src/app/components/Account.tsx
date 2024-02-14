import React from "react";
import { motion } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0/client";

const Account: React.FC = () => {
  const { user, error, isLoading } = useUser();
  return (
    <motion.div
      className="min-h-screen w-full bg-folly"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h1>Account</h1>
      <p>This is the Account page.</p>
      {!user && <a href="/api/auth/login">Log In</a>}
      {user && <a href="/api/auth/logout">Log Out</a>}
    </motion.div>
  );
};

export default Account;
