import React from 'react';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';

// data
import navData from '../../assets/NavData';



function All() {
  return (
    <>
      <Header navData={navData} />
      <div>잔체페이지임</div>
      <Footer/>
    </>
  );
}

export default All;
