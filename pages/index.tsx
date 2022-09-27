import type { NextPage } from "next";
import Head from "next/head";
import { Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Rohmat Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Project */}

      {/* Contact me */}
    </div>
  );
};

export default Home;
