import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { OutlinedCard } from './components/Card/index';
import { obtenerCuentasUser } from './services/obtenerCuentasUser';
import { useStyles } from './styles';
import { Cuenta } from '../../context/models/index';
import { DataContext } from '../../context/DataContext';

export const CuentasLanding: React.FC = () => {
  const classes = useStyles();
  const [cuentas, setCuentas] = useState([]);
  const { updateGlobalState } = useContext(DataContext);
  useEffect(() => {
    const getCuentas = async () => {
      const cuentasRes = await obtenerCuentasUser();
      setCuentas(cuentasRes);
      updateGlobalState(cuentasRes);
    };
    getCuentas();
  }, [updateGlobalState]);
  if (!cuentas.length) {
    return <p>Cargando...</p>;
  }
  return (
    <Grid container className={classes.container}>
      <Typography className={classes.title}>
        Información de mis cuentas
      </Typography>
      <Grid
        className={classes.containerItems}
        justifyContent="center"
        container
        item
        xs={10}
        md={12}
      >
        {cuentas.map((cuenta: Cuenta) => {
          return <OutlinedCard key={cuenta.idCuenta} {...cuenta} />;
        })}
      </Grid>
    </Grid>
  );
};
