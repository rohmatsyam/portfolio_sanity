import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  About,
  ContactMe,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFD600]">
      <Head>
        <title>Rohmat Portfolio</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Project */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-end">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky z-50 w-[50px] cursor-pointer bottom-5 mx-auto">
          <div className="">
            <img
              src="/img/home.png"
              alt=""
              className="w-10 h-10 bg-black rounded-full cursor-pointer grayscale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
