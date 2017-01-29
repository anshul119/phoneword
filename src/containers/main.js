import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import Keboard from '../components/keyboard'
import Matches from '../components/matches'
import Footer from '../components/footer'

class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="content-wrapper">
					<Keboard dispatch={this.props.dispatch} />
					<Matches matches ={this.props.matches.allMatches} />
				</div>
				<Footer />
			</div>
		)
	}
}

function mapStateToProps(store) {
	return {
		matches: store.matches
	}
}

export default connect(mapStateToProps)(Main)