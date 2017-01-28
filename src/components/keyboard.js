import React from 'react'
import { KEYS } from '../constants/keys'
import { fetchMatches } from '../actions/matchesAction'
import Matches from './matches'

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
		const keys = KEYS.map(key => {
			return (
				<button onClick={() => this.typeNumber(key.number)} key={key.number}>
					{key.number}
				</button>)
		})
		return (
			<div className="keyboard">
				<div className="typedNumber">{this.state.typedNumber}</div>
				<div className="keys">{keys}</div>
				<input type="checkbox" checked={this.state.dictionary} onChange={() => {this.toggleDictionary()}} name="dictionaryMatches"/>
				<button className="get-result" onClick={() => {this.findMatches()}}>Find Matches</button>
				<Matches matches ={this.props.matches.allMatches} />
			</div>
		)
	}
}