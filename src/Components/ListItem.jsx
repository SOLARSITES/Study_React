import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-around;
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
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    box-shadow: inset 0 0 50px 30px black;
    transition: box-shadow 0.4s ease-in-out;
    cursor: pointer;
    &::after {
      opacity: 0;
    }
  }
  }
`;

export const ListItem = ({ itemList }) => (
  <List>
    {itemList.map((item) => (
      <Item key={item.id} img={item.img}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
      </Item>
    ))}
  </List>
);
