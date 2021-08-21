import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  text-align: right;
  min-width: 107px;
  margin-left: 20px;
  margin-right: 10px;
`;

const TrashButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  background-image: url(${trashImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 24px;
  height: 24px;
`;

const Toppings = styled.div`
  color: #8b8b8b;
  font-size: 15px;
  width: 100%;
`;

const Choices = styled.div`
  color: #8b8b8b;
  font-size: 16px;
  width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  const toppings = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(', ');

  const choices = order.choice;

  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled
      onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({ ...order, index })}
    >
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)} />
      {toppings && <Toppings key={order.id}>Добавки: &nbsp;{toppings}</Toppings>}
      {choices && <Choices key={order.id}>Ваш выбор: &nbsp;{choices}</Choices>}
    </OrderItemStyled>
  );
};
