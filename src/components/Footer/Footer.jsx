import './Footer.css';
import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Text } from '../../text.svg';

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
              <a href='/#'>사이트 소개</a>
            </li>
            <li>
              <a href='/#'>문의하기</a>
            </li>
          </div>
          <p>Copyright 2022. soonyeob All rights reserved</p>
        </footer>
        </div>
    )
}

export default Footer;