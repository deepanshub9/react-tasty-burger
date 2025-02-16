import React from 'react'
import Layout from '../../components/Layout/Layout';
import Section1 from './Section1';
import '../../styles/HomeStyle.css';


function Home() {
  return (
    <>
    <Layout>
      {/* Home Section Hero Banner */}
      <Section1 />
    </Layout>
    </>
  )
}

export default Home;