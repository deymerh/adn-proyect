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
    table: {
      minWidth: 650,
    },
    text: {
      marginTop: '10px',
      textAlign: 'center',
    },
  }),
);
