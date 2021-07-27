import React, { ChangeEvent, useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { GlobalContext } from '../../../../context/DataContext';
import { useStyles } from './styles';
import { Donante } from '../../models/Donante';
import * as donationServices from '../../services/donationServices';

export const EnvelopeDataEntryForm: React.FC = () => {
  const classes = useStyles();
  const { globalState, updateGlobalState } = GlobalContext();
  const [usuarioDonante, setUsuarioDonante] = useState<Donante>({
    nombre: 'Deymer',
    id: 708098,
    cantidadDonada: 10000,
    edad: 17,
    fecha: '2021-07-19',
  });
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUsuarioDonante({
      ...usuarioDonante,
      [target.name]: target.value,
    });
  };
  const handleSubmit = () => {
    donationServices.manejadorDonaciones(
      usuarioDonante,
      globalState,
      updateGlobalState,
    );
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
              value={usuarioDonante.nombre}
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
              value={usuarioDonante.id}
              onChange={handleInputChange}
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
              value={usuarioDonante.cantidadDonada}
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
              value={usuarioDonante.edad}
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
              value={usuarioDonante.fecha}
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
