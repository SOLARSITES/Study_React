import React, { useContext } from 'react';
import { CheckoutStyleWrap, CheckoutStyleLabel, CheckoutStyleInput } from '../Styled/CheckoutStyle';
import { ContextItem } from '../Functions/context';

export const Choices = () => {
  const {
    openItem,
    choices: { choices, changeChoices },
  } = useContext(ContextItem);

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
};
