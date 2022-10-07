import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { urlFor } from "../sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import {
  About,
  ContactMe,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from "../components";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from "../utils";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFD600] min-w-sm">
      <Head>
        <title> Rohmat || Portfolio</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="description" content="Portfolio" />
        <meta
          name="keyword"
          content="Backend Developer, Fronted Developer, Full Stack Developer, Freelancer, Web Developer"
        />
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Project */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-end">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky z-50 w-[50px] cursor-pointer bottom-[5%] mx-auto">
          <div className="w-10 h-10 bg-black rounded-full cursor-pointer grayscale hover:grayscale-0">
            <Image
              src={urlFor(pageInfo.homePic).url()}
              alt="Home"
              layout="fill"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
