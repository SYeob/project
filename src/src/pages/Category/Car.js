import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CarMenu from '../../components/Contents/CategoryMenu/CarMenu';

function Car(props) {
  return (
    <>
      <Header navData={props.navData} />
      <CarMenu navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer/>
    </>
  );
}

export default Car;
