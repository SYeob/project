import './Footer.css';

const Footer = (props) => {
    return (
        <div>
             <footer>
          <div className='footer-logo'>
            <props.Logo />
            <span></span>
            <props.Text />
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