import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from '../../core/layout';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Igreja Mosaico</title>
        <meta name="description" content="Site da Igreja Mosaico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Bem vinda ao dashboard da Mosaico!</Heading>
      </main>
    </PageLayout>
  );
};

export default Home;
