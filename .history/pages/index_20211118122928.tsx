import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arturo Abruzzini</title>
        <meta
          name="description"
          content="Arturo Abruzzini’s personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Arturo Abruzzini’s personal website
        </h1>

        <p className={styles.description}>Explore</p>

        <div className={styles.grid}>
          <Link href="/count">
            <a className={styles.card}>
              <h2>Voice count</h2>
              <p>A voice counter for counting crochet and knitting stiches.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
