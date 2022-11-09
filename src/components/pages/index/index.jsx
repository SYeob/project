import '../../../App.css';
import { ReactComponent as Logo } from '../../../../src/image/logo.svg';
import { ReactComponent as Text } from '../../../../src/image/text.svg';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
// component
import Header from '../../Layout/Header/Header';
import Nav from '../../Layout/Header/Nav.jsx';
import Footer from '../../Layout/Footer/Footer';
import Banner from '../../Layout/Banner/Banner';
import MainPage from '../../pages/index/index';
import All from '../../pages/All/All';
import Index from '../../Layout/Index/Index.jsx';
// data
import navData from '../../../../src/store/NavData';
import itemData from '../../../../src/store/itemData';
import indexProduct from '../../../../src/store/indexProduct';
// image
import Clock from '../../../image/clock.png';
import BannerImg from '../../../image/banner.png';
import Hamberger from '../../../image/menu.svg';
import Close from '../../../image/close.svg';

const index = (props) => {
  return (
    <div className='App'>
      {/* 헤더 */}
      <Header Logo={Logo} Text={Text} Hamberger={Hamberger} navData={navData} />
      {/* 네비바 */}
      <Nav navData={navData} Close={Close} />
      {/* 배너 */}
      <Banner BannerImg={BannerImg} />
      {/* 컨텐츠 */}
      <Index Clock={Clock} navData={navData} itemData={itemData} indexProduct={indexProduct} />
      {/* 푸터 */}
      <Footer Logo={Logo} Text={Text} />
    </div>
  );
};

export default index;
