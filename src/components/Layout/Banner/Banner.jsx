import './Banner.css'

const Banner = (props) => {
  return (
  <div>
        <div className='banner'>
          <div>
            <img src={props.BannerImg} alt="banner1" />
          </div>
        </div>
  </div>
  )
};

export default Banner;
