import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import { useEffect } from 'react';

export default function Home() {  
  return (
    <Layout            
      description="Zamoviy kasblarni biz bilan birga o'rganing!">      
      <main>
        <HomepageFeatures />      
      </main>
    </Layout>
  );
}