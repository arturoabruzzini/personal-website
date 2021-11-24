import type { NextPage } from "next";
import Head from "next/head";
import VoiceCount from "../components/voiceCount";
import styles from "../styles/Count.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Count with me</title>
        <meta name="description" content="Voice counter for crochet/knitting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Count with me!</h1>
        <div className={styles.description}>
          Count out loud from 1 to 10 repeatedly and I’ll keep track of the
          total count.
          <VoiceCount />
        </div>
      </main>
    </div>
  );
};

export default Home;
