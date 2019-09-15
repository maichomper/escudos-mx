import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    marginBottom: 24,
    padding: 24,
  }
});


const StateListItem = ({ slug, title, img }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid 
          container
          direction="row"
          justify="center"
      >
        <img src={img} alt={`Coat of Arms of ${title} `} />
      </Grid>
      <CardActions>
        <Link to={`/state/${slug}`}><h3>{title}</h3></Link>
      </CardActions>
    </Card>
  );
} 

export default StateListItem;
