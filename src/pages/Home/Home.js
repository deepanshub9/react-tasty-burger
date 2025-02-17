import React from 'react'
import Layout from '../../components/Layout/Layout';
import Section1 from './Section1';
import '../../styles/HomeStyle.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';


function Home() {
  return (
    <>
    <Layout>
      {/* Home Section Hero Banner */}
      <Section1 />

      {/* Home Section 2 */}
      <Section2/>

      {/* Home Section 3 */}
      <Section3 />

      {/* Home Section 4 promotion */}
      <Section4 />
      
    </Layout>
    </>
  )
}

export default Home;