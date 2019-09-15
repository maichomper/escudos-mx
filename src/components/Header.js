import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// @todo: Dónde se guardan variables del tema como colores?
// Cuál es la mejor forma de estilizar el header usando BEM?
// como recico fontFamilty en los 2 títulos?
// por que no sale el hover en el ícono?

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Playfair Display',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Playfair Display',
  },
  flagDivider: {
    width: '40%',
    height: theme.spacing(1)
  },
  mxGreen: { background: '#006847' },
  mxRed: { background: '#CE1126' }
}));

export default () => {
  const classes = useStyles();
  return(
    <header>
      <Paper>
        <div className={classes.root}>
          <Grid container direction='row' justify='flex-end'>
            <IconButton aria-label='More Info'>
              <InfoIcon />
            </IconButton>
          </Grid>
          <Typography variant='h1' className={classes.title}>
            Armorial of Mexico
          </Typography>
          <Typography variant='p' className={classes.subtitle}>
            A brief history about the coat of arms of the Mexican states.
          </Typography>
        </div>
        <Grid container direction='row' justify='space-between'>
          <Box className={`${classes.flagDivider} ${classes.mxGreen}`}>&nbsp;</Box>
          <Box className={`${classes.flagDivider} ${classes.mxRed}`}>&nbsp;</Box>
        </Grid>
      </Paper>
    </header>
  );
};
