/* eslint-disable jsx-a11y/anchor-is-valid */

import './Header.css';
import { Link } from 'react-router-dom';
// icon
import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Text } from '../../text.svg';
import  { ReactComponent  as SearchIcon} from '../../assets/search.svg';
import Hamberger from '../../menu.svg';
import Close from '../../close.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';

function Header(props) {
  
  let [mobileOpen, setMobileOpen] = useState(false);




  return (
    <>
      <header>
        <Link to={'/'} className='logo'>
          <Logo />
          <span />
          <Text />
        </Link>
        <input type='text' className='searchBar' placeholder='검색어를 입력해 주세요'/>
        <SearchIcon className='searchIcon' type='submit' />
        <a className='loginText'>
          {/* 모바일 햄버거 메뉴*/}
          <img
            src={Hamberger}
            alt='menu'
            onClick={() => {
              setMobileOpen(!mobileOpen);
            }}
          />

          <Modal className='dpNone'>로그인/회원가입</Modal>
        </a>
      </header>
      <nav>
        <ul className={`navContent ${mobileOpen ? 'active' : ''}`}>
          {/* 햄버거메뉴에 로그인 추가 */}
          <span className='login-menu'>
            <li>
              <img
                src={Close}
                alt=''
                className='closeBtn'
                onClick={() => {
                  setMobileOpen(!mobileOpen);
                }}
              />
            </li>
            <li className='login-li'>
              <Modal></Modal>
            </li>
            {/*내비바 map 반복문 */}
          </span>
          {props.navData.map(function (a, i) {
            return (
              <li key={i}>
                <Link to={props.navData[i].link}>{props.navData[i].title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
