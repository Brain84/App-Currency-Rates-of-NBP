import React from 'react';
import '../styles/RateResult.scss';

const RateResult = props => {
  return (
    <div className="container__result">
      <p>Sell <span>{props.sell}</span> pln</p>
      <p>Buy <span>{props.buy}</span> pln</p>
    </div>
  )
}

export default RateResult;