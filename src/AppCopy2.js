import './App.css';
import { ReactComponent as Logo } from './image/logo.svg';
import { ReactComponent as Text } from './image/text.svg';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// component
import Header from './components/Layout/Header/Header.jsx';
import Nav from './components/Layout/Header/Nav.jsx';
import Footer from './components/Layout/Footer/Footer';
import Banner from './components/Layout/Banner/Banner';
import MainPage from './components/pages/index/index.jsx';
import All from './components/pages/All/All';
import Index from './components/Layout/Index/Index.jsx';
// data
import navData from './store/NavData';
import itemData from './store/itemData';
import indexProduct from './store/indexProduct';
// image
import Clock from './image/clock.png';
import BannerImg from './image/banner.png';
import Hamberger from './image/menu.svg';
import Close from './image/close.svg';

function App() {
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
}

export default App;
