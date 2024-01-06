"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/Navbar";

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { user, error, isLoading } = useUser();
  //   const [isClient, setIsClient] = useState(false);
  console.log("user", user, isLoading);

  return (
    <div className="min-h-screen w-full bg-sage">
      {/* {!user && <a href="/api/auth/login">Log In</a>}
      {user && <a href="/api/auth/logout">Log Out</a>} */}
      <Navbar />
    </div>
  );
};

export default MainLayout;
