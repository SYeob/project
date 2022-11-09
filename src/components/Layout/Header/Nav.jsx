/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';

const Nav = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className='navContent'>
          {/* 햄버거메뉴에 로그인 추가 */}
          <span className='login-menu'>
            <li>
              <img src={props.Close} alt='' className='closeBtn' />
            </li>
            <a
              className='login-li'
              onClick={() => {
                navigate(props.navData[0].login);
              }}
            >
              로그인
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
    </div>
  );
};

{
  /* <a
onClick={() => {
  navigate(props.navData[i].link);
}}
>
{props.navData[i].title}
</a> */
}

export default Nav;
