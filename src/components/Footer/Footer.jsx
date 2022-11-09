import './Footer.css';
import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Text } from '../../text.svg';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div>
      <footer>
        <div className='footer-logo'>
          <Logo />
          <span></span>
          <Text />
        </div>
        <div className='footer-flex'>
          <li>
            <Link to={'/about'}>사이트 소개</Link>
          </li>
          <li>
            <Link to={'/help'}>문의하기</Link>
          </li>
        </div>
        <p>Copyright 2022. soonyeob All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
