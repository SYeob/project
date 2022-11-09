import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function About(props) {
  return (
    <>
      <Header navData={props.navData} />
      <Footer/>
    </>
  );
}

export default About;
