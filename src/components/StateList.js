import React from 'react';
import StateListItem from'./StateListItem';
import { connect } from 'react-redux';

const StateList = (props) => {
  return(
    <div className="state-list">
      {props.mxStates.map((mxState) => (
        <StateListItem key={mxState.slug} {...mxState} />
      ))}
    </div>
  );
};

const mapStateToProps = (mxStates) => {
  return { mxStates: mxStates };
};
export default connect(mapStateToProps)(StateList);
