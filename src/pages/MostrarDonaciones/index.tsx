import React, { useContext } from 'react';
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { DataContext } from '../../context/DataContext';

const MostrartDonaciones: React.FC = () => {
  const classes = useStyles();
  const { globalState } = useContext(DataContext);
  return (
    <Grid container className={classes.container}>
      <Typography variant="h5" color="textSecondary">
        Información de donantes
      </Typography>
      <Grid justifyContent="center" container item xs={10} md={6}>
        <Grid item md={10} xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Edad</TableCell>
                  <TableCell align="right">Fecha</TableCell>
                  <TableCell align="right">Cantidad Donada</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {globalState.personasDonantes.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.nombre}
                    </TableCell>
                    <TableCell align="right">{item.edad}</TableCell>
                    <TableCell align="right">{item.fecha}</TableCell>
                    <TableCell align="right">{item.cantidadDonada}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.text}
          >
            Información de fondos generales
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Caridad</TableCell>
                  <TableCell align="center">Contrucción</TableCell>
                  <TableCell align="center">Niños</TableCell>
                  <TableCell align="center">Fondos Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center" component="th" scope="row">
                    {globalState.caridad}
                  </TableCell>
                  <TableCell align="center">
                    {globalState.construccion}
                  </TableCell>
                  <TableCell align="center">{globalState.ninos}</TableCell>
                  <TableCell align="center">
                    {globalState.dineroTotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Button size="small">
        <Link to="/">Nueva Donación</Link>
      </Button>
    </Grid>
  );
};
export default MostrartDonaciones;
