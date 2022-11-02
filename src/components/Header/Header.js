/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// icon
import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Text } from '../../text.svg';
import Hamberger from '../../menu.svg';
import Close from '../../close.svg';

function Header(props) {
  return (
    <>
      <header>
        <Link to={'/'} className='logo'>
          <Logo />
          <span />
          <Text />
        </Link>
        <input type='text' className='searchBar' placeholder='검색어를 입력해 주세요' />
        <a className='loginText'>
          <img src={Hamberger} alt='menu' />
          <span
            onClick={() => {
              alert('로그인 모달 만들어야됨');
            }}
            className='dpNone'
          >
            로그인/회원가입
          </span>
        </a>
      </header>

      <nav>
        <ul className='navContent'>
          {/* 햄버거메뉴에 로그인 추가 */}
          <span className='login-menu'>
            <li>
              <img src={Close} alt='' className='closeBtn' />
            </li>
            <Link to={props.navData[0].login} className='login-li'>
              로그인
            </Link>
            {/* map 반복문 */}
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
