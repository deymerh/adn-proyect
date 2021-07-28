import React, { ChangeEvent, useState, useContext } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import { DataContext } from '../../../../context/DataContext';
import { useStyles } from './styles';
import { Donante } from '../../models/Donante';
import * as donationServices from '../../services/donationServices';

export const IngresoDonaciones: React.FC = () => {
  const classes = useStyles();
  const { globalState, updateGlobalState } = useContext(DataContext);
  const [usuarioDonante, setUsuarioDonante] = useState<Donante>({
    nombre: 'Deymer',
    id: 73984410,
    cantidadDonada: 10000,
    edad: 17,
    fecha: '2021-07-30',
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
              value={usuarioDonante.nombre}
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
              onChange={handleInputChange}
              value={usuarioDonante.id}
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
              value={usuarioDonante.cantidadDonada}
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
              value={usuarioDonante.edad}
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
