import React from 'react';
import Header from '../../components/Header/Header';
import DetailContent from '../../components/DetailContent/DetailContent';
import Footer from '../../components/Footer/Footer';


function Detail(props) {
  return (
    <>
      <Header navData={props.navData} />
      <DetailContent itemData={props.itemData}/>
      <Footer />
    </>
  );
}

export default Detail;
