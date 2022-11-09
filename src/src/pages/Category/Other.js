import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OtherMenu from '../../components/Contents/CategoryMenu/OtherMenu';

function Other(props) {
  return (
    <>
      <Header navData={props.navData} />
      <OtherMenu navData={props.navData} indexProduct={props.indexProduct} itemData={props.itemData} />
      <Footer/>
    </>
  );
}

export default Other;
