/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './DetailContent.css';

function DetailContent(props) {
  let { id } = useParams();
  let [tap,setTap]= useState(0);

  return (
    <div className='detail-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <img src={'/'+id+'.jpeg'}  width={'100%'}/>
          </div>
          <div className='col-md-6 mt-4'>
            <h4>{props.itemData[id].title}</h4>
            <p className='locationText'>{props.itemData[id].location}</p>
            <p>현재가: {props.itemData[id].price}원</p>
            <div className='box'>03 : 30 : 12초</div>
            <div className='boxText'> 경매 진행 중인<br/> 상품입니다.</div>
            <input type="text" />
          </div>
        </div>
      </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTap(0) }} eventKey="link0">물품정보</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1">판매자에게 문의</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTap(2) }} eventKey="link2">경매약관</Nav.Link>
      </Nav.Item>
      </Nav>
      <TabContent tap={tap} itemData={props.itemData}/>
    </div>
  );
}

  function TabContent(props){
    let { id } = useParams();
    if (props.tap === 0){
      return <div className='container'>
        <h5>{props.itemData[id].discription}</h5>
        <div className='mt100'>
        <img src={'/'+id+'.jpeg'}  width={'100%'}/>
        </div>
        </div>
    }
    if (props.tap === 1){
      return <div className='container'>
        <div> 
          연락처: {props.itemData[id].Contact}
        </div>
        </div>
    }
    if (props.tap === 2){
      return <div className='container'>
        <div>
          {props.itemData[0].caution}
        </div>
        </div>
    }
  }
export default DetailContent;
