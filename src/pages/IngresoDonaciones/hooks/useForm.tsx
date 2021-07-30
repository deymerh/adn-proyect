import React, { ChangeEvent, useState } from 'react';

// eslint-disable-next-line
export function useForm<T>(initialState: T){
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  const resetValues = () => {
    setValues(initialState);
  };

  return { values, handleInputChange, resetValues };
}
