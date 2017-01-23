import React from 'react';
import { KEYS } from '../constants/keys'

export default class Keyboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			typedNumber : ''
		}
	}

	typeNumber(number) {
		this.setState(function(previousState) {
			return {typedNumber: previousState.typedNumber.concat(number)};
		});
	}

	render() {
		const keys = KEYS.map(key => {
			return (
				<button onClick={e => this.typeNumber(key.number)} key={key.number}>
					{key.number}
				</button>);
		});

		return (
			<div className="keyboard">
				<div className="typedNumber">{this.state.typedNumber}</div>
				{keys}
			</div>
		);
	}
}