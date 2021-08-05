import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid #008000;
  border-radius: 8px;
  width: 600px;
  height: 600px;
  margin: auto 0;
  overflow: hidden;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  font-weight: 400;
`;

const Banner = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>
              {openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
            </div>
          </HeaderContent>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};
