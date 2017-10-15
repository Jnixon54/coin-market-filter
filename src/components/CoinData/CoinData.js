import React, { Component } from 'react'

export default class CoinData extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div className="coin-container">
        <div className="coin-data">
          <span>{ JSON.parse(this.props.coin)['symbol'] }: ${JSON.parse(this.props.coin)['price_usd']} | {JSON.parse(this.props.coin)['price_btc']}</span>
        </div>
        <div className="coin-percent">
          <span>{JSON.parse(this.props.coin)['percent_change_24h']}</span>
        </div>
      </div>
    )
  }
}