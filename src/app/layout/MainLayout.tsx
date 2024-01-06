"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { user, error, isLoading } = useUser();
  //   const [isClient, setIsClient] = useState(false);
  console.log("user", user, isLoading);

  return (
    <div>
      <h1>Main Layout!!</h1>
    </div>
  );
};

export default MainLayout;
