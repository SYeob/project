/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Index.css';
import { Link } from 'react-router-dom';
import Clock from '../../assets/clock.png';
const Index = (props) => {
  let fourItemArray = [0,1,2,3];

  return (
    <div>
      {props.indexProduct.map(function (a, i) {
        return (
          <div className='container' key={i}>
            <div className='flex'>
              {/* 카테고리, 더보기 */}
              <h5>{props.indexProduct[i].category}</h5>
              <Link to={props.navData[i].indexLink}>
                더 보기
              </Link>
            </div>

            <div className='row'>
              {fourItemArray.map(function (a, i) {

                return (
                  <div className='col-md-3' key={i}>
                    <img src={'http://boomyeob.dothome.co.kr/img/portfolio/'+i+'.jpeg'} />
                    <div className='text-wrap'>
                      <h5>{props.itemData[i].title}</h5>
                      <p>{props.itemData[i].location}</p>
                      <div className='price-wrap'>
                        <p>현재가</p>
                        <div className='flex'>
                          <p>{props.itemData[i].price}</p>
                          <img src={Clock} />
                          <h5 className='clock'>03:30:12 초</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
