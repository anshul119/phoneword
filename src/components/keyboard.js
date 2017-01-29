import React from 'react'
import { KEYS } from '../constants/keys'
import { fetchMatches } from '../actions/matchesAction'
import { MAXLENGTH } from '../constants/keys'

export default class Keyboard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			typedNumber : '',
			dictionary: false,
			typedNumberClass: 'keyboard_typed-number',
			errorClass: 'keyboard_typed-number--error'
		}
	}

	typeNumber(number) {
		this.setState(previousState => {
			if(previousState.typedNumber.length > MAXLENGTH - 1) {
				return {typedNumberClass: previousState.typedNumberClass.concat(' ' + this.state.errorClass)}
			}
			return {typedNumber: previousState.typedNumber.concat(number)}
		})
	}

	delete() {
		this.setState(previousState => {
			let number = previousState.typedNumber
			if(previousState.typedNumberClass.includes(this.state.errorClass)) {
				let oldTypedNumberClass = this.state.typedNumberClass,
					lastIndex = oldTypedNumberClass.lastIndexOf(' ')
				let newTypedNumberClass = oldTypedNumberClass.substring(0, lastIndex)
				return {
					typedNumberClass: newTypedNumberClass,
					typedNumber: number.substring(0, number.length - 1)
				}
			}
			return {
				typedNumber: number.substring(0, number.length - 1)
			}
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
				<div className="keys_key center" key={i}>
					<button className="button button_primary" onClick={() => this.typeNumber(key.number)}>
						{key.number}
					</button>
					<span>{key.letters}</span>
				</div>
			)
		})
		return (
			<div className="keyboard">
				<div className={this.state.typedNumberClass}>
					{this.state.typedNumber}
					<div className="keyboard_backspace" onClick={() => this.delete()}>
						<i className="fa fa-chevron-left"></i>
					</div>
				</div>
				<div className="keys">{keys}</div>
				<div className="checkbox">
					<input className="checkbox_input" type="checkbox" checked={this.state.dictionary} onChange={() => {this.toggleDictionary()}} name="dictionaryMatches"/>
					<label className="checkbox_label" htmlFor="dictionaryMatches">Only show dictionary matches</label>
				</div>
				<button className="keyboard_get-result button button_secondary" onClick={() => this.findMatches()}>Find Matches</button>
			</div>
		)
	}
}