import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../core/layout';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    isPublic: true
  },
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paloma Freitas</title>
        <meta name="description" content="Site da Igreja Mosaico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
