import React, { useContext } from 'react';
import styled from 'styled-components';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Styled/CheckoutStyle';
import { ContextItem } from '../Functions/context';

const ToppingsTitle = styled.h3`
  font-size: 23px;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const Toppings = () => {
  const {
    toppings: { toppings, checkToppings },
  } = useContext(ContextItem);

  return (
    <>
      <ToppingsTitle>Добавки:</ToppingsTitle>
      <CheckoutStyleWrap>
        {toppings.map((item, i) => (
          <CheckoutStyleLabel key={i}>
            <CheckoutStyleInput type="checkbox" checked={item.checked} onChange={() => checkToppings(i)} />
            {item.name}
          </CheckoutStyleLabel>
        ))}
      </CheckoutStyleWrap>
    </>
  );
};
