import React, { Component } from 'react';
import NumButton from './Numbutton';

class Calc extends Component {
	constructor(props) {	
		super(props);
		this.state = {
			operandA : '',
			operandB : '',
			operator : ''
		};

		this.onNumInput = this.onNumInput.bind(this);
		this.onAC = this.onAC.bind(this);
		this.onCalc = this.onCalc.bind(this);
		this.onOperatorInput = this.onOperatorInput.bind(this);
	}

	onNumInput(num, e) {
		e.preventDefault();
		if(this.state.operator === '') {
			this.setState({
				operandA : this.state.operandA += num
			});
		}
		else {
			this.setState({
				operandB : this.state.operandB += num
			});
		}
	}

	onAC() {
		this.setState({
			operandA : '',
			operandB : '',
			operator : ''
		});
	}
	
	onOperatorInput(operator) {
		if(this.operandA !== '') {
			this.setState({
				operator : operator
			});
		}
	}

	onCalc() {
		const {operandA, operandB, operator} = this.state;
		let result;
		
		switch (operator) {
			case '+':
				result = Number(operandA) + Number(operandB);
				break;
		
			case '-':
				result = Number(operandA) - Number(operandB);
				break;
			
			case '×':
				result = Number(operandA) * Number(operandB);				
				break;
			
			case '÷':
				result = Number(operandA) / Number(operandB);				
				break;

			default:
				return;
		}
		this.props.setHistory(`${operandA} ${operator} ${operandB} = ${result}`);
		this.setState({
			operandA : String(result),
			operandB : '',
			operator : ''
		});
	}

	render() {
		return (
			<div className="calc">
				<div className="calc__title">Calculator</div>
				<div className="calc__screen">{`${this.state.operandA} ${this.state.operator} ${this.state.operandB}`}</div>
				<div className="calc__keyboard">
					<div className="calc__keyboard__main">
						<div onClick={this.onAC} className="button calc__keyboard__ac">AC</div>
						<div class="calc__keyboard__number">
							<div class="calc__keyboard__number__line">
								{ Array(3).fill(null).map((e, idx) => <NumButton onClick={this.onNumInput.bind(this, String(idx + 1))} value={idx + 1} />) }
							</div>
							<div class="calc__keyboard__number__line">
								{ Array(3).fill(null).map((e, idx) => <NumButton onClick={this.onNumInput.bind(this, String(idx + 4))} value={idx + 4} />) }
							</div>
							<div class="calc__keyboard__number__line">
								{ Array(3).fill(null).map((e, idx) => <NumButton onClick={this.onNumInput.bind(this, String(idx + 7))} value={idx + 7} />) }
							</div>
						</div>
						<NumButton onClick={this.onNumInput.bind(this, '0')} value={0} />
					</div>
					<div className="calc__keyboard__operator">
						{['+', '-', '×', '÷'].map(elem => (
							<div onClick={() => this.onOperatorInput(elem)} className="button button--deepblue">{elem}</div>
						))}					
						<div onClick={this.onCalc} className="button button--pink">=</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Calc;