/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../Contents/Index.css';
import Clock from '../../../assets/clock.png';

function DigitalMenu(props) {
  return (
    <div>
      <div className='container'>
        <div className='flex'>
          {/* 카테고리, 더보기 */}
          <h5>{props.navData[1].title}</h5>
        </div>

        <div className='row'>
          {props.itemData.map(function (a, i) {
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
    </div>
  );
}

export default DigitalMenu;
