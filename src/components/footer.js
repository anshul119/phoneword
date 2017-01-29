import React from 'react'

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<p className="footer_credits center">
					Made with <i className="fa fa-heart"></i> and <i className="fa fa-coffee"></i> by
					<a href="https://www.linkedin.com/in/anshul119/" target="_blank">Anshul Sharma</a>
				</p>
			</div>
		)
	}
}