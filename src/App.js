import React, { Component } from 'react';
import './calculator.scss';
import Calc from './Calc';
import History from './History';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			history : []
		};

		this.setHistory = this.setHistory.bind(this);
	}

	setHistory(newHistory) {
		this.setState({
			history : this.state.history.concat(newHistory)
		});
	}

	render() {
		return (
			<div className="App">
				<div className="Container">
					<Calc setHistory={this.setHistory}/>
					<History history={this.state.history}/>
				</div>
			</div>
		);
	}
}

export default App;