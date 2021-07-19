import React, { ChangeEvent, useContext, useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { useGlobalContext } from '../../context/DataContext';
import { useStyles } from './styles';
import { data } from '../../models/userDonator';
import { handleDonations } from '../../utils/handleDonations';

export const EnvelopeDataEntryForm: React.FC = () => {
  const classes = useStyles();

  const { globalState, updateGlobalState } = useGlobalContext();

  const [values, setValues] = useState<data>({
    name: 'Deymer',
    id: 708098,
    amount: 10000,
    age: 17,
    date: '2021-07-19',
  });
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  const handleSubmit = () => {
    handleDonations(values, globalState, updateGlobalState);
    setValues({
      name: '',
      id: 708098,
      amount: 10000,
      age: 17,
      date: '',
    });
  };
  return (
    <>
      <Grid container className={classes.container}>
        <Typography variant="h5" color="textSecondary">
          Información de donación
        </Typography>
        <Grid justifyContent="center" container item xs={10} md={6}>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.field}
              fullWidth
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              size="small"
              required
              name="name"
              onChange={handleInputChange}
              value={values.name}
            />
            <TextField
              className={classes.field}
              fullWidth
              id="outlined-basic"
              label="Identificación"
              type="number"
              variant="outlined"
              size="small"
              name="id"
              required
              onChange={handleInputChange}
              value={values.id}
            />
            <TextField
              className={classes.field}
              fullWidth
              id="outlined-basic"
              label="Cantidad"
              type="number"
              variant="outlined"
              size="small"
              required
              name="amount"
              onChange={handleInputChange}
              value={values.amount}
            />
            <TextField
              className={classes.field}
              fullWidth
              id="outlined-basic"
              label="Edad"
              variant="outlined"
              size="small"
              type="number"
              required
              name="age"
              onChange={handleInputChange}
              value={values.age}
            />
            <TextField
              className={classes.field}
              fullWidth
              id="outlined-basic"
              variant="outlined"
              size="small"
              type="date"
              name="date"
              required
              onChange={handleInputChange}
              value={values.date}
            />
            <Button
              className={classes.btn}
              fullWidth
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
