import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.li`
  position: relative;
  color: white;
  font-size: 30px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center center;
  width: 400px;
  height: 155px;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }
  @media (min-width: 577px) {
    &:hover {
      box-shadow: inset 0 0 50px 30px black;
      transition: box-shadow 0.4s ease-in-out;
      &::after {
        opacity: 0;
      }
    }
  }
  @media (max-width: 768px) {
    width: 320px;
  }
  @media (max-width: 745px) {
    width: 300px;
  }
  @media (max-width: 705px) {
    width: 280px;
  }
  @media (max-width: 670px) {
    width: 260px;
  }
  @media (max-width: 640px) {
    width: 250px;
  }
  @media (max-width: 610px) {
    width: 240px;
  }
  @media (max-width: 585px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    font-size: 28px;
  }
  @media (max-width: 320px) {
    font-size: 27px;
  }
`;

export const ListItem = ({ itemList }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  return (
    <List>
      {itemList.map((item) => (
        <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>{formatCurrency(item.price)}</p>
        </Item>
      ))}
    </List>
  );
};
