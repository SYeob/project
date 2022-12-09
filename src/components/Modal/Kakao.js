import './kakao.css'
import KakaoIcon from '../../assets/kakaoIcon.png'

function Kakao() {
  const REST_API_KEY = '4ca3f8321b81d065aa8e2f9a172ec626';
  const REDIRECT_URI = 'http://192.168.2.57:3000';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
    <img src={KakaoIcon} className="kakaoIcon" alt="kakaoicon" />
      <a className='kakaoImg'href={KAKAO_AUTH_URL}>카카오 로그인</a>
      
    </>
  );
}

export default Kakao;
