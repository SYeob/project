/* eslint-disable jsx-a11y/alt-text */
import './Modal.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Kakao from './Kakao';
import Google from './Google';

import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Text } from '../../text.svg';




function LoginModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span variant='primary' onClick={handleShow}>
        로그인/회원가입
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className='modal-logo'>
            <Logo />
            <span />
            <Text />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Google/>
          <Kakao />
        </Modal.Body>
        <Modal.Footer>
          <Button className='modal-close-btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;

// rest-api 4ca3f8321b81d065aa8e2f9a172ec626
