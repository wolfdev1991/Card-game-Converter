import React, { Component } from 'react';
import './App.css';
import './cardGame.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CurrencyCalculator from './currencyCalculatorjs';
import TheCardGame from './cardGamejs';

class App extends Component {
  state = {
    welcomePageMode: true,
    currencyCalculatorMode: false,
    currencyMultiple: 0.0,
    theNumericalValueofCurrency: 0.0,
    cardGameMode: false,
    cardGameInProgress: false,
    cardGameResult: "",
    secretAnswer: ""
  };

  activateCurrencyCalculatorHandler = () => {
    this.setState({welcomePageMode: false});
    this.setState({cardGameMode: false});
    this.setState({secretAnswer: ""});
    this.setState({currencyCalculatorMode: true});
    this.setState({secretAnswer: ""});
  }

  goCardGamePageHandler = () => {
    this.setState({welcomePageMode: false});
    this.setState({cardGameMode: true});
    this.setState({secretAnswer: ""});
  };

  beginCardGameHandler = () => {
    this.setState({cardGameMode: true});
    this.setState({cardGameInProgress: true});
    this.setState({cardGameResult: ""});

    const min = Math.ceil(1);
    const max = Math.floor(5);
    let theAnswer = Math.floor(Math.random() * (max - min)) + min;
    alert(theAnswer);
    this.setState({secretAnswer: theAnswer});
  };

  turnCard = (theCardName) => {
    if (!this.state.cardGameInProgress) {
      alert("Please Begin The Game");
    } else {
      if (theCardName === this.state.secretAnswer) {

        alert("YES");
      } else {
        alert("NO");
      }
      this.setState({cardGameInProgress: false});
    }
  };

  calculateCurrencyHandler = () => {
    let theTotal = this.state.currencyMultiple * this.state.theNumericalValueofCurrency
    alert(theTotal);
  }

  getCurrencyValueHandler = (curVal) => {
    this.setState({theNumericalValueofCurrency: curVal});
  }

  getCurrencyHandler = (thecurrency) => {
    switch(thecurrency){
      case "Dollar":
        this.setState({currencyMultiple: 13.82});
      break;

      case "Pound":
        this.setState({currencyMultiple: 18.10});
      break;

      case "Euro":
        this.setState({currencyMultiple: 15.71});
      break;

      default:
        break;
    }
  }
  render() {
    let welcomePage = null;
    if (this.state.welcomePageMode) {
      welcomePage =  <div id="welcomePG">
                        <p>
                          Welcome All
                        </p>
                     </div>
    };

    let currencyCalculator = null;
    if (this.state.currencyCalculatorMode) {
      currencyCalculator =  <div id="currencyCalc">
                              < CurrencyCalculator 
                                currency = {this.getCurrencyHandler}
                                captureValue = {this.getCurrencyValueHandler}
                                calcTotal = {this.calculateCurrencyHandler}/>
                            </div>
    };

    let cardGame = null;
    if (this.state.cardGameMode) {
      cardGame =  <div id="theCardGame">
                    < TheCardGame 
                      startTheGame={this.beginCardGameHandler}
                      turnCard={this.turnCard}/>
                  </div>
    };

const theNavBar = <nav class="navbar navbar-inverse">
 <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/currencyCalculatorjs'} className="nav-link">currencyCalculator</Link></li>
            <li><Link to={'/cardGamejs'} className="nav-link">cardGame</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={welcomePage} />
              <Route path='/currencyCalculatorjs' component={currencyCalculator} />
              <Route path='/cardGamejs' component={cardGame} />
          </Switch>
        </div>
      </Router>
          </nav>

return (
      <div className="App">
        {theNavBar}
        {welcomePage}
        {currencyCalculator}
        {cardGame}
      </div>
    );
  }
}

export default App;
