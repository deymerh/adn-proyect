import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './styles';

export interface InputProps {
  value: string | number;
  name: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputProps> = ({
  value,
  onChange,
  name,
  type = 'text',
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.field}
      fullWidth
      variant="outlined"
      size="small"
      type={type}
      label={name.charAt(0).toUpperCase() + name.slice(1)}
      name={name}
      required
      onChange={onChange}
      value={value}
    />
  );
};
