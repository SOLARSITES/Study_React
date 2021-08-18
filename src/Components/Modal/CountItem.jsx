import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/context';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountInput = styled.input`
  font-size: 20px;
  text-align: center;
  background-color: transparent;
  border: none;
  width: 37px;
`;

const ButtonCount = styled.button`
  color: white;
  font-family: inherit;
  font-size: 20px;
  text-align: center;
  background-color: #299b01;
  border-color: transparent;
  border-radius: 4px;
  width: 30px;
  height: 30px;
  padding: 0;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    color: #299b01;
    background-color: white;
    border-color: #299b01;
  }
  &:focus {
    outline-style: none;
  }
`;

export const CountItem = () => {
  const {
    counter: { count, setCount, onChange },
  } = useContext(ContextItem);

  return (
    <CountWrapper>
      <span>Количество:</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>
          –
        </ButtonCount>
        <CountInput
          type="number"
          min="1"
          max="99"
          value={count < 1 ? 1 : count && count > 99 ? 99 : count}
          onChange={onChange}
        />
        <ButtonCount disabled={count >= 99} onClick={() => setCount(count + 1)}>
          +
        </ButtonCount>
      </div>
    </CountWrapper>
  );
};
