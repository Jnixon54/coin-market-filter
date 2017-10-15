import React, { Component } from 'react'

export default class CoinData extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    // if (JSON.parse(this.props.coin).length === 0){
    //   console.log(JSON.parse(this.props.coin));
    //   return <p>No items found.</p>;
    // }

    const coin = JSON.parse(this.props.coin);

    return(
      <div className="coin-container">
        <div className="coin-data">
          <span>{ coin['rank'] }: {coin['name']} ({ coin['symbol'] }): ${ coin['price_usd']} | {coin['price_btc']}</span>
        </div>
        <div className="coin-percent">
          {JSON.parse(this.props.coin)['percent_change_24h'] >= 0 ? 
          <span className="price-up">{coin['percent_change_24h']}</span>
          :
          <span className="price-down">{coin['percent_change_24h']}</span>
          }
        </div>
      </div>
    )
  }
}