import React, { Component } from 'react';

export default class cards extends Component {

    turnCard = (element) => {
        this.props.turnCard(element.target.name);
    };

    startTheGame = (element) => {
        this.props.startTheGame(element.target.name);
    };

    render () {
        return (
            <div className = "productDivs">
                <p> Pick a card, any card <br></br>
                </ p >
                <button onClick={this.startTheGame}>Begin Game</button>
                <br></br>
                <button id="playCard1" name="1" onClick={this.turnCard}></button>
                <button id="playCard2" name="2" onClick={this.turnCard}></button>
                <button id="playCard3" name="3" onClick={this.turnCard}></button>
                <button id="playCard4" name="4" onClick={this.turnCard}></button>
                
            </div>
        );
    }
}