import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AllMenu from '../../components/Contents/CategoryMenu/AllMenu';

function All(props) {
  return (
    <>
      <Header navData={props.navData} />
        <AllMenu navData = {props.navData} indexProduct={props.indexProduct} itemData={props.itemData}/>
      <Footer/>
    </>
  );
}

export default All;
