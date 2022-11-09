import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SportMenu from '../../components/Contents/CategoryMenu/SportMenu';

function Sport(props) {
  return (
    <>
      <Header navData={props.navData} />
      <SportMenu navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer/>
    </>
  );
}

export default Sport;
