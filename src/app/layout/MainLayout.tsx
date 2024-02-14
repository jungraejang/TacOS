"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/Navbar";
import { useNavbarContext } from "../context/NavbarContext";
import { CSSTransition } from "react-transition-group";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../components/Home";
import Archive from "../components/Archive";
import Search from "../components/Search";
import Account from "../components/Account";

type MainLayoutProps = {};

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { user, error, isLoading } = useUser();
  const { operation, updateOperation } = useNavbarContext();
  let Component;
  switch (operation) {
    case "Home":
      Component = Home;
      break;
    case "Archive":
      Component = Archive;
      break;
    case "Search":
      Component = Search;
      break;
    case "Account":
      Component = Account;
      break;
    default:
      Component = Home;
  }
  //   const [isClient, setIsClient] = useState(false);

  return (
    <div className="min-h-screen w-full bg-darkGray">
      {!user && <a href="/api/auth/login">Log In</a>}
      {user && (
        <div className="relative">
          {/* Add more CSSTransitions as needed */}
          <AnimatePresence>
            <motion.div
              key={operation}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Component />
            </motion.div>
          </AnimatePresence>{" "}
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default MainLayout;
