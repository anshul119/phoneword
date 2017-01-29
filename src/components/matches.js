import React from 'react'

export default class Matches extends React.Component {
	render () {
		return (
			<div className="matches">
				<ul>
					{this.props.matches.map((match, i) => {
						return <li key={i}>{match}</li>
					})}
				</ul>
			</div>
		)
	}
}