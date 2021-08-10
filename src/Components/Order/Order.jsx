import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

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

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 107px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders }) => {
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          {orders.length ? (
            <OrderList>
              {orders.map((order) => (
                <OrderListItem key={order.id} order={order} />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Список заказов пуст</EmptyList>
          )}
        </OrderContent>
        <Total>
          <span>Итого:</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  );
};
