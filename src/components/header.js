import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<header className="header center">
				<h1 className="header-heading">Phoneword</h1>
				<h3 className="header-sub_heading">Tap in some numbers to see the equivalent words.</h3>
			</header>
		)
	}
}