/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../Index/Index.css';
import Clock from '../../../assets/clock.png';
import { Link } from 'react-router-dom';

function DigitalMenu(props) {
  return (
    <div>
      <div className='container'>
        <div className='flex'>
          {/* 카테고리, 더보기 */}
          <h5>{props.navData[1].title}</h5>
        </div>

        <div className='row'>
              <div className='col-md-3'>
                <div className='hover-wrap'>
                  <button>
                    <Link to={'/detail/' + props.itemData[1].id}>응찰하기</Link>
                  </button>
                </div>
                <img src={'/'+1+'.jpeg'}  />

                <div className='text-wrap'>
                  <h5>{props.itemData[1].title}</h5>
                  <p>{props.itemData[1].location}</p>
                  <div className='price-wrap'>
                    <p>현재가</p>
                    <div className='flex'>
                      <p>{props.itemData[1].price}</p>
                      <img src={Clock} />
                      <h5 className='clock'>03:30:12 초</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3' >
                <div className='hover-wrap'>
                  <button>
                    <Link to={'/detail/' + props.itemData[8].id}>응찰하기</Link>
                  </button>
                </div>
                <img src={'/'+8+'.jpeg'}  />
                <div className='text-wrap'>
                  <h5>{props.itemData[8].title}</h5>
                  <p>{props.itemData[8].location}</p>
                  <div className='price-wrap'>
                    <p>현재가</p>
                    <div className='flex'>
                      <p>{props.itemData[8].price}</p>
                      <img src={Clock} />
                      <h5 className='clock'>03:30:12 초</h5>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMenu;
