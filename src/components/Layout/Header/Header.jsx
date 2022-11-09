/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
  let navigate = useNavigate();


  return (
    <div>
      {/* 헤더 */}
      <header>
        <a
          onClick={() => {
            navigate(props.navData[0].home);
          }}
          className='logo'
        >
          <props.Logo />
          <span />
          <props.Text />
        </a>
        <input type='text' className='searchBar' placeholder='검색어를 입력해 주세요' />
        <a className='loginText'>
          <img src={props.Hamberger} alt='menu'/>
          <span className='dpNone'>로그인/회원가입</span>
        </a>
      </header>
    </div>
  );

};


export default Header;
