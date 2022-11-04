import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FashionMenu from '../../components/Contents/CategoryMenu/FashionMenu';

function Fashion(props) {
  return (
    <>
      <Header navData={props.navData} />
      <FashionMenu navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer />
    </>
  );
}

export default Fashion;
