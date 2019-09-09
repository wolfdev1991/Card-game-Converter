import React, { Component } from 'react';

export default class currencyCalc extends Component {

    currency = (element) => {
        this.props.currency(element.target.value);
    }

    calcTotal = () => {
        this.props.calcTotal();
    };

    captureValue = (element) => {
        this.props.captureValue(element.target.value);
    }

    render () {
        return (
            <div className = "CurrencyConverter">
		<select class="form-control" id="converter" onChange = {this.currency}>
                <option value="">Choose A Currency</option>
				<option value="Dollar">Dollar</option>
				<option value="Pound" >Pound</option>
				<option value="Euro"  >Euro</option>
				</select>
				<br></br>
                <input type="number"  className="form-control" onChange = {this.captureValue}/>
                <button name ="money" onClick = {this.calcTotal}>Calc Total</button>

            </div>
        );
    }
}