import React from 'react';
import Header from '../../components/Header/Header';
import Index from '../../components/Index/Index';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

function Home(props) {
  return (
    <>
      <Header navData={props.navData} />
      <Banner />
      <Index navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer />
    </>
  );
}

export default Home;
