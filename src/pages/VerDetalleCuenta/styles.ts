import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      flexDirection: 'column',
    },
    title: {
      padding: '1rem 0',
    },
    a: {
      textDecoration: 'none',
      marginTop: '20px',
    },
    descripcion: {
      padding: '0 1rem',
      textAlign: 'center',
    },
    btn: {
      margin: '5px 0px',
    },
  }),
);
