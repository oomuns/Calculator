import React, { Component } from 'react';

class History extends Component {

	render() {
		const history = this.props.history.map(el => (<tr><td>{el}</td></tr>));
		return (
			<div className="history">
				<div className="history__title">History</div>
				<table className="history__table">
					{history}
				</table>
			</div>
		);
	}
}

export default History;