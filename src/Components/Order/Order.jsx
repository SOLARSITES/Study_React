import React, { useContext } from 'react';
import styled from 'styled-components';
import { OrderTitle, Total, TotalPrice } from '../Styled/ModalStyle';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  height: calc(100% - 80px);
  padding: 20px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = () => {
  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  // const deleteItem = (order) => setOrders(orders.filter((item) => item !== order));

  // Иммутабельный вариант функции deleteItem с применением метода filter()
  const deleteItem = (index) => {
    const newOrders = orders.filter((item, i) => index !== i);

    setOrders(newOrders);
  };

  // Иммутабельный вариант функции deleteItem с применением метода splice()
  // const deleteItem = (index) => {
  //   const newOrders = [...orders];
  //   newOrders.splice(index, 1);
  //   setOrders(newOrders);
  // };

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? (
          <OrderList>
            {orders.map((order, index) => (
              <OrderListItem key={index} index={index} order={order} deleteItem={deleteItem} />
            ))}
          </OrderList>
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderContent>
      {orders.length ? (
        <>
          <Total>
            <span>Итого:</span>
            <span>{totalCounter}</span>
            <TotalPrice>{formatCurrency(total)}</TotalPrice>
          </Total>
          <ButtonCheckout
            onClick={() => {
              if (authentication) {
                setOpenOrderConfirm(true);
              } else {
                logIn();
              }
            }}
          >
            Оформить
          </ButtonCheckout>
        </>
      ) : null}
    </OrderStyled>
  );
};
