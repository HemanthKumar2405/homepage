import Head from "next/head";
import HomePage from "./components/homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>UrbanNet Dashboard</title>
      </Head>
      <HomePage />
    </>
  );
}