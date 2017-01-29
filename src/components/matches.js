import React from 'react'

export default class Matches extends React.Component {
	render () {
		return (
			<div>
				<ul className="matches">
					{this.props.matches.map((match, i) => {
						return <li className="matches_match center" key={i}>{match}</li>
					})}
				</ul>
			</div>
		)
	}
}