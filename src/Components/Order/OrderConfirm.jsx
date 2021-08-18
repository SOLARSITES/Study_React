import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Styled/ModalStyle';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const Modal = styled.div`
  background-color: white;
  border-radius: 8px;
  margin: auto 0;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
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
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        {orders.length ? (
          <>
            <Text>Осталось только подтвердить Ваш заказ!</Text>
            <Total>
              <span>Итого:</span>
              <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout
              onClick={() => {
                sendOrder(dataBase, orders, authentication);
                setOrders([]);
              }}
            >
              Подтвердить
            </ButtonCheckout>
          </>
        ) : (
          <>
            <Text>Благодарим Вас за заказ!</Text>
            <ButtonCheckout onClick={() => setOpenOrderConfirm(false)}>Закрыть</ButtonCheckout>
          </>
        )}
      </Modal>
    </Overlay>
  );
};
