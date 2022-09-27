import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rohmat Portfolio</title>
      </Head>

      <h1>Lets Build an Awesome Portfolio</h1>
    </div>
  );
};

export default Home;
