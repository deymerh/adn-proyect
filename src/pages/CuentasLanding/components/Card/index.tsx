import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Cuenta } from '../../../../context/models/index';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const OutlinedCard: React.FC<Cuenta> = ({
  estado,
  tipoCuenta,
  valorDisponible,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Dia {new Date().getDate()} del Mes {new Date().getMonth() + 1}
        </Typography>
        <Typography variant="h5" component="h2">
          {valorDisponible}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Saldo disponible
        </Typography>
        <Typography variant="body2" component="p">
          Estado de cuenta: {+estado === 1 ? 'Activa' : 'Inactiva'}
          <br />
          Tipo de cuenta: {tipoCuenta}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/cuenta">
          <Button size="small">VER DETALLE</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
