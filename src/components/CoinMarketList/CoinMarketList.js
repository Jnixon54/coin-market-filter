import React, { Component } from 'react';

export default class CoinList extends Component {
  constructor(){
    super();

    this.state = {
      coinList: [],
      userInput: ''
    }

  }


  
  componentWillMount(){
    this.retrieveMarketData();
  }

  retrieveMarketData(){
    return fetch('https://api.coinmarketcap.com/v1/ticker/').then(response => response.json()).then(result => this.setState({coinList: result}));
  }

  // handleChange(val){
  //   this.setState({ userInput: val });
  // }

  filterCoinList(val){
    this.setState({ userInput: val });
    let updatedList = [];

    for (let i = 0; i < this.state.coinList.length; i++){
      if (this.state.coinList[i].includes(val)){
        updatedList.push(this.state.coinList[i]);
      }
    }
    this.setState({coinList: updatedList});
  }

  render(){
    return(
      <div className="filterList">
        <input type="text" placeholder="Search Symbol or Name" onChange={ (e) =>  this.filterCoinList(e.target.value)}/>
        <p> { this.state.userInput } </p>
        <ul>
          {
            this.state.coinList.map( (item) => { 
              return <li className="listItem">{ JSON.stringify(item) }</li>;})
          }
        </ul>
      </div>
    );
  }
}

// set initial list with all coins.
// filter coins based on input.
// if no input display full list.
