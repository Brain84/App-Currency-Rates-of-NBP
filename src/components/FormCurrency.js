import React from 'react';
import '../styles/FormCurrency.scss';

const FormCurrency = props => {

  return (
    <form className="form__currency" onSubmit={props.submit}>
      <label>Select currency
        <select value={props.valueSelect} onChange={props.select}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="chf">CHF</option>
        </select>
      </label>
      <label>Select date
          <input
          type="date"
          value={props.valueDate}
          min="2002-01-02"
          max={props.maxDate}
          onChange={props.date}
        />
      </label>
      <button className="btn__form">Show rate currency</button>
    </form>
  )
}

export default FormCurrency;