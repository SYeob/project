/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Index.css';
import { useNavigate } from 'react-router-dom';

const Index = (props) => {
  let navigate = useNavigate();
  let fourArray = [0,1,2,3];

  return (
    <div>
      {props.indexProduct.map(function (a, i) {
        return (
          <div className='container' key={i}>
            <div className='flex'>
              {/* 카테고리, 더보기 */}
              <h5>{props.indexProduct[i].category}</h5>
              <a
                onClick={() => {
                  navigate(props.navData[0].link);
                }}
              >
                더 보기
              </a>
            </div>

            <div className='row'>
              {fourArray.map(function (a, i) {

                return (
                  <div className='col-md-3' key={i}>
                    <img src={'https://codingapple1.github.io/shop/shoes' + (i+1) + '.jpg'} />
                    <div className='text-wrap'>
                      <h5>{props.itemData[i].title}</h5>
                      <p>{props.itemData[i].location}</p>
                      <div className='price-wrap'>
                        <p>현재가</p>
                        <div className='flex'>
                          <p>{props.itemData[i].price}</p>
                          <img src={props.Clock} />
                          <h5>03:30:12 초</h5>
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
