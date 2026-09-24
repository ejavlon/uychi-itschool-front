import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {  
  return (
    <Layout            
      title="Bosh sahifa"
      description="Javlon Ergashev — Dasturlash va axborot texnologiyalari bo'yicha shaxsiy qo'llanmalar va konspektlar to'plami">      
      <main>
        <HomepageFeatures />      
      </main>
    </Layout>
  );
}