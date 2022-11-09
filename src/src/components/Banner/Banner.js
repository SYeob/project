import './Banner.css'
import BannerImg from '../../assets/banner3.png'
const Banner = (props) => {
  return (
  <div>
        <div className='banner'>
          <div>
            <img src={BannerImg} alt="banner1" />
          </div>
        </div>
  </div>
  )
};

export default Banner;
