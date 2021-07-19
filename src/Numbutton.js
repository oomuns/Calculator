import React, { Component } from 'react';

class NumButton extends Component {
	render() {
		if(this.props.value === 0) {
            return (
                <div onClick={this.props.onClick} class="button button--blue--big">{this.props.value}</div>
            );
        }
        else {
            return (
                <div onClick={this.props.onClick} class="button button--blue">{this.props.value}</div>
            );
        }
	}
}

export default NumButton;