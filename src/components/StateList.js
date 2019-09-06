import React from 'react';
import StateListItem from'./StateListItem';

const ExpenseList = (props) => (
  <div>
    {
      props.mxStates.map((mxState) => (
        <StateListItem key={mxState.slug} {...mxState} />
      ))
    }
  </div>
);

export default ExpenseList;
