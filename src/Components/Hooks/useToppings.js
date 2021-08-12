import { useState } from 'react';

const getTopping = (toppings) =>
  toppings.map((item) => ({
    name: item,
    checked: false,
  }));

export function useToppings(openItem) {
  const readyToppings = openItem.topping
    ? openItem.topping
    : openItem.toppings
    ? getTopping(openItem.toppings)
    : [];

  // Вариант с условием И\ИЛИ (до последнего редактирования переменной readyToppings)
  // const readyToppings = (openItem.toppings && getTopping(openItem.toppings)) || [];

  const [toppings, setToppings] = useState(readyToppings);

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
