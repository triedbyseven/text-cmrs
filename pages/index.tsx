import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/ui/Navbar';
import HomeComponents from '../components/pages/Home';
import Layout from '../components/ui/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to JOYMD SMS Content Relationship Management." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout.Container overflow='hidden'>
        <Navbar.Floating />
        <Layout.Page>
          <HomeComponents.Hero />
        </Layout.Page>
      </Layout.Container> 
    </div>
  );
};

export default Home;