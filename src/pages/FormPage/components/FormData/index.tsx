import React, { ChangeEvent, useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { GlobalContext } from '../../../../context/DataContext';
import { useStyles } from './styles';
import { UserDonator } from '../../models/userDonator';
import * as donationServices from '../../services/donationServices';

export const EnvelopeDataEntryForm: React.FC = () => {
  const classes = useStyles();
  const { globalState, updateGlobalState } = GlobalContext();
  const [values, setValues] = useState<UserDonator>({
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
    donationServices.handleDonations(values, globalState, updateGlobalState);
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
              id="name"
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
              id="identificacion"
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
              id="amount"
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
              id="age"
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
              id="date"
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
