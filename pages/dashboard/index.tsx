import type { NextPage } from 'next';
import Head from 'next/head';
import Providers from '../../components/providers';
import Components from '../../components/pages/Dashboard';
import Layout from '../../components/ui/Layout';

const Dashboard: NextPage = () => {
  return (
    <Providers.Private>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard for a user account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Providers.WindowDimensions resize={true}>
        <Layout.Row 
          flexDirection='row' 
          height='100%'
        >
          <Layout.Column 
            width='300px' 
            height='100%' 
            padding='0px'
          >
            {/* SideBar Here */}
            <Components.SideBar />
          </Layout.Column>
          <Layout.Column 
            flex='1' 
            padding='0px 15px'
          >
            {/* Content Here */}
            <Components.Content />
          </Layout.Column>
        </Layout.Row>

      </Providers.WindowDimensions>
    </Providers.Private>
  );
};

export default Dashboard;