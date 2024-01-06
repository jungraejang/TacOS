"use client";
import Image from "next/image";
import MainLayout from "../app/layout/MainLayout";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  // const { user, error, isLoading } = useUser();
  // //   const [isClient, setIsClient] = useState(false);
  // console.log("user", user, isLoading);
  return (
    <>
      <Head>
        <title>Five Years Journal</title>
        <meta name="description" content="5 years experiment about yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <MainLayout />
      </main>
    </>
  );
}
