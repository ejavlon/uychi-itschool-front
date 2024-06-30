import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import { memo } from 'react';

function Home() {  
  return (
    <Layout            
      description="Zamoviy kasblarni biz bilan birga o'rganing!">      
      <main>
        <HomepageFeatures />      
      </main>
    </Layout>
  );
}

export default memo(Home);
