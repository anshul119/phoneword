import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import Keboard from '../components/keyboard'
import Footer from '../components/footer'

class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Keboard matches={this.props.matches} dispatch={this.props.dispatch} />
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