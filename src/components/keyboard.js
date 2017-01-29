import React from 'react'
import { KEYS } from '../constants/keys'
import { fetchMatches } from '../actions/matchesAction'
import { MAXLENGTH } from '../constants/keys'

export default class Keyboard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			typedNumber : '',
			dictionary: false
		}
	}

	typeNumber(number) {
		this.setState((previousState) => {
			if(previousState.typedNumber.toString().length > MAXLENGTH - 1) {
				return
			}
			return {typedNumber: previousState.typedNumber.concat(number)}
		})
	}

	toggleDictionary() {
		this.setState((previousState) => {
			return {dictionary: !previousState.dictionary}
		})
	}

	findMatches() {
		this.props.dispatch(fetchMatches(this.state))
	}

	render() {
		const keys = KEYS.map((key, i) => {
			return (
				<div className="keyboard-keys-key center" key={i}>
					<button className="button button-primary" onClick={() => this.typeNumber(key.number)}>
						{key.number}
					</button>
					<span>{key.letters}</span>
				</div>
			)
		})
		return (
			<div className="keyboard">
				<div className="keyboard-typed_number">{this.state.typedNumber}</div>
				<div className="keyboard-keys">{keys}</div>
				<input type="checkbox" checked={this.state.dictionary} onChange={() => {this.toggleDictionary()}} name="dictionaryMatches"/>
				<button className="keyboard-get_result button button-secondary" onClick={() => {this.findMatches()}}>Find Matches</button>
			</div>
		)
	}
}