import { useState } from 'react';

const getTopping = (toppings) =>
  toppings &&
  toppings.map((item) => ({
    name: item,
    checked: false,
  }));

export function useToppings(openItem) {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings));

  const checkToppings = (index) => {
    setToppings(
      toppings.map((item, i) => {
        const newItem = { ...item }; // Для иммутабельности исходного объекта toppings

        if (i === index) {
          newItem.checked = !newItem.checked;
        }
        return newItem;
      }),
    );
  };

  return { toppings, checkToppings };
}
