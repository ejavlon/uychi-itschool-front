import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';


export default function Home() {  

  useEffect(() => {
    const loadReplainJS = () => {      
      const script = document.createElement('script');      
      script.src = './replain.js';
      script.onload = () => initializeParticlesJS();
      document.body.appendChild(script);
    };

    loadReplainJS();
  },[])
  return (
    <Layout            
      description="Zamoviy kasblarni biz bilan birga o'rganing!">      
      <main>
        <HomepageFeatures />      
      </main>
    </Layout>
  );
}