import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Styled/ModalStyle';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const NarrowModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #008000;
  border-radius: 8px;
  width: 450px;
  height: 310px;
  z-index: 100;
  animation: modal 0.6s alternate ease-in-out;
  @keyframes modal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    height: 100%;
    max-height: 310px;
    overflow-y: auto;
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    &::-webkit-scrollbar-button {
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      height: 0;
      background-color: transparent;
      border-radius: 0;
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
    &::-webkit-resizer {
      background-color: transparent;
    }
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 310px;
  padding: 20px 30px 24px;
  @media (max-width: 768px) {
    padding: 30px 30px 24px;
  }
  @media (max-width: 425px) {
    padding: 30px 22px 24px;
  }
  @media (max-width: 410px) {
    padding: 25px 22px 24px;
  }
  @media (max-width: 375px) {
    padding: 25px 17px 24px;
  }
`;

const OrderTitleConfirm = styled(OrderTitle)`
  line-height: 54px;
  font-size: 35px;
  text-transform: none;
  @media (max-width: 768px) {
    line-height: 35px;
  }
  @media (max-width: 375px) {
    font-size: 32px;
  }
  @media (max-width: 275px) {
    font-size: 30px;
  }
`;

const TextConfirm = styled.h3`
  text-align: center;
  margin-top: -10px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  @media (max-width: 576px) {
    margin-top: 2px;
  }
  @media (max-width: 410px) {
    line-height: 35px;
  }
  @media (max-width: 375px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media (max-width: 275px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const TextThanks = styled(TextConfirm)`
  margin-top: -5px;
  @media (max-width: 768px) {
    margin-bottom: 7px;
  }
  @media (max-width: 425px) {
    margin-top: -8px;
  }
  @media (max-width: 375px) {
    font-size: 22px;
  }
`;

const ButtonConfirm = styled(ButtonCheckout)`
  margin-top: 0;
  @media (max-width: 425px) {
    font-size: 19px;
    width: 200px;
    height: 52px;
    padding: 10px 0 10px;
  }
`;

const ButtonThanks = styled(ButtonCheckout)`
  margin-top: 37px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: [
    'topping',
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : 'no topping'),
  ],
  choice: ['choice', (item) => (item ? item : 'no choice')],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));

  dataBase.ref('orders').push().set({
    clientName: authentication.displayName,
    clientEmail: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = () => {
  const {
    auth: { authentication },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase,
  } = useContext(Context);

  const dataBase = firebaseDatabase();
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const closeModal = (e) => {
    if (e.target.id === 'confirm') {
      setOpenOrderConfirm(false);
    }
  };

  return (
    <>
      <Overlay id="confirm" onClick={closeModal} />
      <NarrowModal>
        <Content>
          <OrderTitleConfirm>{authentication.displayName},</OrderTitleConfirm>
          {orders.length ? (
            <>
              <TextConfirm>Пожалуйста, подтвердите заказ!</TextConfirm>
              <Total>
                <span>Итого:</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
              </Total>
              <ButtonConfirm
                onClick={() => {
                  sendOrder(dataBase, orders, authentication);
                  setOrders([]);
                }}
              >
                Подтвердить
              </ButtonConfirm>
            </>
          ) : (
            <>
              <TextThanks>Благодарим Вас за заказ!</TextThanks>
              <ButtonThanks onClick={() => setOpenOrderConfirm(false)}>Закрыть</ButtonThanks>
            </>
          )}
        </Content>
      </NarrowModal>
    </>
  );
};
