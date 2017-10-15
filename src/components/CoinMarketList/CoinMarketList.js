import React, { Component } from 'react';
import CoinData from '../CoinData/CoinData';

export default class CoinList extends Component {
  constructor(){
    super();

    this.state = {
      initialCoinList: [],
      currentList: [],
      userInput: ''
    }

  }

  componentWillMount(){
    this.retrieveMarketData();
  }

  retrieveMarketData(){
    return fetch('https://api.coinmarketcap.com/v1/ticker/').then(response => response.json()).then(result => this.setState({initialCoinList: result, currentList: result}));
  }

  // handleChange(val){
  //   this.setState({ userInput: val });
  // }

  filterList(val){
    let currentList = this.state.initialCoinList;
    // console.log(currentList);

    // for (let i = 0; i < this.state.coinList.length; i++){
    //   // if (this.state.coinList[i]['symbol'].toLowerCase().includes(val.toLowerCase())){ // May require babel-polyfill

    //   //   // currentList.push(this.state.coinList[i]);
    //   // }
    // }
    console.log(val);
    currentList = currentList.filter(item => item['symbol'].toLowerCase().includes(val.toLowerCase()));

    this.setState({currentList: currentList, userInput: val});
  }

  render(){
    return(
      <div className="filterList">
        <input className="searchField" type="text" placeholder="Search Symbol or Name" onChange={ (e) =>  this.filterList(e.target.value)}/>
        <ul>
          {
            this.state.currentList.map( (item) => { 
              return <a className="list-link" href={"https://coinmarketcap.com/currencies/" + item['id'] }><li className="listItem coinBox"><CoinData coin={ JSON.stringify(item) } /></li></a>;})
          }
        </ul>
      </div>
    );
  }
}

// set initial list with all coins.
// filter coins based on input.
// if no input display full list.
