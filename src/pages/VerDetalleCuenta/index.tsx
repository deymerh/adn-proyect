import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const VerDetalleCuenta: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        Información de la cuenta
      </Typography>
      <Grid justifyContent="center" container>
        <Typography className={classes.descripcion}>
          Aqui iría la descripción de la cuenta desde el backend
        </Typography>
      </Grid>
      <Link to="/" className={classes.a}>
        <Button color="primary" size="small" variant="outlined">
          Volver a mis cuentas
        </Button>
      </Link>
    </Grid>
  );
};
