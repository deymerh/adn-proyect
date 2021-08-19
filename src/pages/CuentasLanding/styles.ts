import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '1.2rem',
    },
    containerItems: {
      gap: '1rem',
    },
    title: {
      padding: '1rem 0',
    },
  }),
);
