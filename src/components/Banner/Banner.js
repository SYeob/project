import './Banner.css';
import BannerImg from '../../assets/banner3.png';
import BannerImg2 from '../../assets/banner2.png';
import BannerImg3 from '../../assets/banner4.png';

import Slider from 'react-slick';

const Banner = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div>
      <div className='banner'>
        <Slider {...settings}>
          <div>
            <img src={BannerImg} alt='banner1' />
          </div>
          <div>
            <img src={BannerImg2} alt='banner1' />
          </div>
          <div>
            <img src={BannerImg3} alt='banner1' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
