import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './styles';

export interface InputProps {
  value: string;
  name: string;
  zIndex: number;
  type?: string;
  onChange: () => void;
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
      name={name}
      required
      onChange={onChange}
      value={value}
    />
  );
};
