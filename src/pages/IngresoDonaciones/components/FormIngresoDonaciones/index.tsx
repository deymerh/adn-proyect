import React, { ChangeEvent, useState, useContext } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../../context/DataContext';
import { useStyles } from './styles';
import { Donante } from '../../models/Donante';
import { InputText } from '../Input/index';
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
    <Grid container className={classes.container}>
      <Typography variant="h5" color="textSecondary">
        Ingresar donación
      </Typography>
      <Grid justifyContent="center" container item xs={10} md={6}>
        <Grid item md={6} xs={12}>
          <InputText
            value={usuarioDonante.nombre}
            name="nombre"
            onChange={handleInputChange}
          />
          <InputText
            value={usuarioDonante.id}
            name="id"
            type="number"
            onChange={handleInputChange}
          />
          <InputText
            type="number"
            name="cantidadDonada"
            onChange={handleInputChange}
            value={usuarioDonante.cantidadDonada}
          />
          <InputText
            type="number"
            name="edad"
            onChange={handleInputChange}
            value={usuarioDonante.edad}
          />
          <InputText
            type="date"
            name="fecha"
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
      {globalState.personasDonantes.length > 0 && (
        <Button size="small">
          <Link to="/donaciones">Ver donaciones</Link>
        </Button>
      )}
    </Grid>
  );
};
