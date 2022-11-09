import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LivingMenu from '../../components/Contents/CategoryMenu/LivingMenu';

function Living(props) {
  return (
    <>
      <Header navData={props.navData} />
      <LivingMenu navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer />
    </>
  );
}

export default Living;
