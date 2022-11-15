/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import '../../Index/Index.css';
import Clock from '../../../assets/clock.png';
import { Link } from 'react-router-dom';

function SportMenu(props) {
  return (
    <div>
      <div className='container'>
        <div className='flex'>
          {/* 카테고리, 더보기 */}
          <h5>{props.navData[5].title}</h5>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <div className='hover-wrap'>
              <button>
                <Link to={'/detail/' + props.itemData[5].id}>응찰하기</Link>
              </button>
            </div>
            <img src={'/' + 5 + '.jpeg'} />
            <div className='text-wrap'>
              <h5>{props.itemData[5].title}</h5>
              <p>{props.itemData[5].location}</p>
              <div className='price-wrap'>
                <p>현재가</p>
                <div className='flex'>
                  <p>{props.itemData[5].price}</p>
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

export default SportMenu;
