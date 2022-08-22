import { useState } from 'react';

export const useInput = (inititialValue) => {
  const [state, setState] = useState(inititialValue);
  return [
    {
      value: state,
      onChange: (e) => setState(e.target.value),
    },
    () => setState(inititialValue),
  ];
};
