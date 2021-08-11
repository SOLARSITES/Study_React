import { useState } from 'react';

export function useChoices() {
  const [choices, setChoices] = useState();

  const changeChoices = (e) => {
    setChoices(e.target.value);
  };
  return { choices, changeChoices };
}
