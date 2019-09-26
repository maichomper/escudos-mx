import React from 'react';
import { connect } from 'react-redux';
import DescriptionComponent from './DescriptionComponent';
import CompositionComponent from './CompositionComponent';
import StateShieldComponent from './StateShieldComponent';

const StatePage = (props) => {
  const mxState = props.mxState;

  return (
    <div className="state-page">
      <DescriptionComponent description={mxState.description} />
      <div className="main-content padding">
        <CompositionComponent composition={mxState.composition} />
        <StateShieldComponent {...mxState} />
        <h2 className="state-page__title">Iconografía</h2>
        <div className="icon-list">
          {mxState.iconography.map((icon, key) => (
            <div className="icon-item" key={`description-${key}`}>
              <img className="icon-item__img" src={`/img/${icon.img}.png`} alt=""/>
              <h3 className="icon-item__title">{icon.title}</h3>
              <p className="icon-item__description">{icon.description}</p>
            </div>
          ))}
        </div>
        <h2 className="state-page__title">Colores</h2>
        <div className="shield-color-palette">
          {mxState.colors.map((color, key) => (
            <div className="color-item" key={`description-${key}`}>
              <div className="color-item__color" style={{background: color.hex }}></div>
              <h3 className="color-item__title">{color.name}</h3>
              <p className="color-item__details">
                Hex: {color.hex}<br />
                Área: {color.area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (mxStates, props) => {
  const slug = props.match.params.slug;

  return { mxState:  mxStates.find((mxState) => mxState.slug === slug)}
};
export default connect(mapStateToProps)(StatePage);
