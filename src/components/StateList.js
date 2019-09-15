import React from 'react';
import StateListItem from'./StateListItem';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 24
  },
}));

const StateList = (props) => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid 
        container
        direction="row"
        justify="center"
      >
        <Grid item xs={10}>
          {props.mxStates.map((mxState) => (
            <StateListItem key={mxState.slug} {...mxState} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (mxStates) => {
  return { mxStates: mxStates };
};
export default connect(mapStateToProps)(StateList);
