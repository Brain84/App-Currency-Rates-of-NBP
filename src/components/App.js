import React, { Component } from 'react';
import '../styles/App.scss';
import FormCurrency from './FormCurrency';
import RateResult from './RateResult';

class App extends Component {
  currentDate = new Date().toISOString().slice(0, 10)

  state = {
    currency: 'usd',
    date: this.currentDate,
    currencySell: '',
    currencyBuy: '',
    error: false
  }

  handleSelect = e => {
    this.setState({
      currency: e.target.value
    })
  }

  handleDate = e => {
    this.setState({
      date: e.target.value
    })
  }

  handleDataFetch = e => {
    e.preventDefault()
    const API = `https://api.nbp.pl/api/exchangerates/rates/c/${this.state.currency}/${this.state.date}/?format=json`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(alert("Please select date without days off (from Monday to Friday)"))
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          currencySell: data.rates[0].ask,
          currencyBuy: data.rates[0].bid,
          error: false
        })
      })
      .catch(err => {
        this.setState({
          error: true
        })
      })
  }

  render() {
    return (
      <div className="app">
        <FormCurrency
          select={this.handleSelect}
          date={this.handleDate}
          submit={this.handleDataFetch}
          valueSelect={this.state.currency}
          valueDate={this.state.date}
          maxDate={this.currentDate}
        />
        <RateResult
          sell={this.state.currencySell}
          buy={this.state.currencyBuy}
        />
      </div>
    );
  }
}

export default App;