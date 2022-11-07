/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailContent.css';

function DetailContent(props) {
  let {id} = useParams();

  return (
    <div className='detail-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={'http://boomyeob.dothome.co.kr/img/portfolio/' + id + '.jpeg'} width='100%' />
          </div>
          <div className='col-md-6 mt-4'>
            <h4 className='pt-5'>{props.itemData[id].title}</h4>
            <p>{props.itemData[id].content}</p>
            <p>{props.itemData[id].price}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
