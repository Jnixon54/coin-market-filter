import React, { Component } from 'react';
import CoinData from '../CoinData/CoinData';

export default class CoinList extends Component {
  constructor(){
    super();

    this.state = {
      initialCoinList: [],
      currentList: [],
      userInput: '',
      isLoading: false
    }

  }

  componentWillMount(){
    this.retrieveMarketData();
  }

  retrieveMarketData(){
    this.state.isLoading = true;
    return fetch('https://api.coinmarketcap.com/v1/ticker/').then(response => response.json()).then(result => this.setState({initialCoinList: result, currentList: result, isLoading: false}));
  }

  filterList(val){
    let currentList = this.state.initialCoinList;
    // console.log(currentList);

    // for (let i = 0; i < this.state.coinList.length; i++){
    //   // if (this.state.coinList[i]['symbol'].toLowerCase().includes(val.toLowerCase())){ // May require babel-polyfill

    //   //   // currentList.push(this.state.coinList[i]);
    //   // }
    // }
    console.log(val);
    currentList = currentList.filter(item => item['symbol'].toLowerCase().includes(val.toLowerCase()) || item['name'].toLowerCase().includes(val.toLowerCase()));

    this.setState({currentList: currentList, userInput: val});
  }

  render(){
    const { isLoading, currentList } = this.state;
    
    if (isLoading) {
      return(
        <div className="filterList">
        <input className="searchField" type="text" placeholder="Search Symbol or Name" onChange={ (e) =>  this.filterList(e.target.value)}/>
        <p>Loading...</p>
        </div>
      );
    }

    return(
      <div className="filterList">
        <input className="searchField" type="text" placeholder="Search Symbol or Name" onChange={ (e) =>  this.filterList(e.target.value)}/>
        <ul>
          {
            currentList.length > 0 
            ?
            this.state.currentList.map( (item) => { 
              return <a className="list-link" href={"https://coinmarketcap.com/currencies/" + item['id'] }><li className="listItem coinBox"><CoinData coin={ JSON.stringify(item) } /></li></a>;})
            :
            <p>No items found.</p>
          }
        </ul>
      </div>
    );
  }
}