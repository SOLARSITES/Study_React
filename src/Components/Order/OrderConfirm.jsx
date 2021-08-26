import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Styled/ModalStyle';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const NarrowModal = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: auto 0;
  width: 450px;
  padding: 30px 30px 27px;
`;

const OrderTitleConfirm = styled(OrderTitle)`
  font-size: 35px;
  text-transform: none;
  @media (max-width: 320px) {
    font-size: 32px;
  }
`;

const TextConfirm = styled.h3`
  text-align: center;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    margin-top: 43px;
  }
  @media (max-width: 320px) {
    font-size: 22px;
    line-height: 32px;
    margin-top: 30px;
    margin-bottom: 27px;
  }
`;

const TextThanks = styled(TextConfirm)`
  margin-top: -5px;
  @media (max-width: 768px) {
    margin-top: 39px;
  }
  @media (max-width: 320px) {
    font-size: 22px;
    margin-top: 30px;
  }
`;

const ButtonConfirm = styled(ButtonCheckout)`
  margin-top: 40px;
  @media (max-width: 425px) {
    font-size: 19px;
    width: 200px;
    height: 52px;
    padding: 10px 0 10px;
  }
  @media (max-width: 320px) {
    margin-top: 32px;
  }
`;

const ButtonThanks = styled(ButtonCheckout)`
  margin-top: 50px;
  @media (max-width: 320px) {
    margin-top: 44px;
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
    <Overlay id="confirm" onClick={closeModal}>
      <NarrowModal>
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
      </NarrowModal>
    </Overlay>
  );
};
