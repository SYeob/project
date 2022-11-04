/* eslint-disable jsx-a11y/anchor-is-valid */

import './Header.css';
import { Link } from 'react-router-dom';
// icon
import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Text } from '../../text.svg';
import Hamberger from '../../menu.svg';
import Close from '../../close.svg';
import Modal from '../Modal/Modal';


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
          {/* 햄버거 */}
          <img src={Hamberger} alt='menu'/>

          <Modal className='dpNone' Logo={Logo} Text={Text}>로그인/회원가입</Modal>
        </a>
      </header>
      <nav>
        <ul className='navContent r0'>
          {/* 햄버거메뉴에 로그인 추가 */}
          <span className='login-menu'>
            <li>
              <img src={Close} alt='' className='closeBtn' />
            </li>
            <a className='login-li'>
              <Modal>로그인</Modal>
            </a>
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
