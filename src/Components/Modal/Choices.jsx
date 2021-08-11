import React from 'react';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Styled/CheckoutStyle';

export function Choices({ openItem, choices, changeChoices }) {
  return (
    <>
      <h3>Выбирайте:</h3>
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
}
