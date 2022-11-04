import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DigitalMenu from '../../components/Contents/CategoryMenu/DigitalMenu';

function Digital(props) {
  return (
    <>
      <Header navData={props.navData} />
      <DigitalMenu navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer />
    </>
  );
}

export default Digital;
