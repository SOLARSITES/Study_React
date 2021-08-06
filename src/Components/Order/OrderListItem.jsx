import React from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
  margin-right: 10px;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${trashImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  border-color: transparent;
  background-size: cover;
`;

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>2</span>
    <ItemPrice>
      {order.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
    </ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);
