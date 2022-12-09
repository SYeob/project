import React from 'react';
import './Modal.css';
import styled from 'styled-components';
import GoogleImg from '../../assets/google.png'


function Google() {
  return (
    <>
      <div>
        <img src={GoogleImg} className="GoogleImg" alt="kakaoicon" />
        <StyledButton>Google 로그인</StyledButton>
      </div>
    </>
  );
}

export default Google;


const StyledButton = styled.button`
  color: white;
  width: 80%;
  height: 40px;
  line-height: 40px;
  background:#4284F3;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin-bottom: 10px;
`;