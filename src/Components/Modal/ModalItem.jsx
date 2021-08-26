import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Styled/ModalStyle';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { Choices } from './Choices';
import { useChoices } from '../Hooks/useChoices';
import { Context, ContextItem } from '../Functions/context';

const Modal = styled.div`
  background-color: #fff;
  border: 1px solid #008000;
  border-radius: 8px;
  width: 600px;
  height: 600px;
  margin: auto 0;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 375px;
  }
  @media (max-width: 320px) {
    height: 365px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px 30px 28px;
  @media (max-width: 768px) {
    height: 100%;
    padding: 17px 30px 24px;
  }
  @media (max-width: 375px) {
    padding: 17px 17px 24px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  font-weight: 400;
  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

const Banner = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 19px;
    margin-bottom: 10px;
  }
`;

export const ModalItem = () => {
  const {
    orders: { orders, setOrders },
    openItem: { openItem, setOpenItem },
  } = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choices,
  };

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const editOrder = () => {
    const newOrders = [...orders];

    newOrders[openItem.index] = order;

    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{formatCurrency(openItem.price)}</div>
          </HeaderContent>
          <ContextItem.Provider value={{ counter, toppings, choices, openItem }}>
            <CountItem />
            {openItem.toppings && <Toppings />}
            {openItem.choices && <Choices />}
          </ContextItem.Provider>
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonCheckout onClick={isEdit ? editOrder : addToOrder} disabled={order.choices && !order.choice}>
            {isEdit ? 'Изменить' : 'Добавить'}
          </ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};
