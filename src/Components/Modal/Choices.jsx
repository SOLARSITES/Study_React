import React, { useContext } from 'react';
import styled from 'styled-components';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Styled/CheckoutStyle';
import { ContextItem } from '../Functions/context';

const ChoicesTitle = styled.h3`
  font-size: 23px;
  @media (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const Choices = () => {
  const {
    openItem,
    choices: { choices, changeChoices },
  } = useContext(ContextItem);

  return (
    <>
      <ChoicesTitle>Выбирайте:</ChoicesTitle>
      <CheckoutStyleWrap>
        {openItem.choices.map((item, i) => (
          <CheckoutStyleLabel key={i}>
            <CheckoutStyleInput
              type="radio"
              name="choices"
              checked={choices === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </CheckoutStyleLabel>
        ))}
      </CheckoutStyleWrap>
    </>
  );
};
