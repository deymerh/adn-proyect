import React, { ChangeEvent, useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { GlobalContext } from '../../../../context/DataContext';
import { useStyles } from './styles';
import { Donante } from '../../models/Donante';
import * as donationServices from '../../services/donationServices';

export const IngresoDonaciones: React.FC = () => {
  const classes = useStyles();
  const { globalState, updateGlobalState } = GlobalContext();
  const [usuarioDonante, setUsuarioDonante] = useState<Donante>({
    nombre: '',
    id: 1,
    cantidadDonada: 0,
    edad: 0,
    fecha: '',
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
              name="nombre"
              onChange={handleInputChange}
            />
            <TextField
              className={classes.field}
              fullWidth
              id="id"
              label="Identificación"
              type="number"
              variant="outlined"
              size="small"
              name="id"
              required
              placeholder="Ej: 73984419"
              onChange={handleInputChange}
            />
            <TextField
              className={classes.field}
              fullWidth
              id="cantidadDonada"
              label="Cantidad"
              type="number"
              variant="outlined"
              size="small"
              required
              name="cantidadDonada"
              onChange={handleInputChange}
              placeholder="Ej: 10000"
            />
            <TextField
              className={classes.field}
              fullWidth
              id="edad"
              label="Edad"
              variant="outlined"
              size="small"
              type="number"
              required
              name="edad"
              onChange={handleInputChange}
              placeholder="Edad del donante. Ej: 18"
            />
            <TextField
              className={classes.field}
              fullWidth
              id="fecha"
              variant="outlined"
              size="small"
              type="date"
              name="fecha"
              required
              onChange={handleInputChange}
              placeholder="Fecha"
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
