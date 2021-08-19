import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const VerDetalleCuenta: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Typography className={classes.title}>
        Información de la cuenta
      </Typography>
      <Grid justifyContent="center" container item xs={10} md={12}>
        <p>Descripción general de la cuenta...</p>
        <Link to="/" className={classes.a}>
          <Button color="primary" size="small" variant="outlined">
            Volver a mis cuentas
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
