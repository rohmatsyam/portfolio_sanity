import type { NextPage } from "next";
import Head from "next/head";
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
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
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
    </div>
  );
};

export default Home;
