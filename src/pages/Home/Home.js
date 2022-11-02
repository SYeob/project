import React from 'react';
import Header from '../../components/Header/Header';
import Index from '../../components/Contents/Index';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

// data
import navData from '../../assets/NavData';
import indexProduct from '../../assets/indexProduct';
import itemData from '../../assets/itemData';


function Home() {
  return (
    <>
      <Header navData={navData} />
      <Banner />
      <Index navData={navData} indexProduct={indexProduct} itemData={itemData}/>
      <Footer/>
    </>
  );
}

export default Home;
