import React from 'react';
import { connect } from 'react-redux';

export default () => {
  const title = 'Escudos MX';
  const subtitle = 'Una descripción breve sobre los escudos de los Estados de la República Mexicana.';

  return(
    <header className="header">
      <i></i>
      <div className="header__titles">
        <h1 className="header__titles--main">{title}</h1>
        <p className="header__titles--secondary">{subtitle}</p>
      </div>
      <div className="header__divider">
        <div className="header__divider--stripe header__divider--green"></div>
        <div className="header__divider--stripe header__divider--red"></div>
      </div>
    </header>
  );
};

const mapStateToProps = (mxStates, props) => {
  const slug = props.match.params.slug;

  return { mxState:  mxStates.find((mxState) => mxState.slug === slug)}
};
export default connect(mapStateToProps)(StatePage);
