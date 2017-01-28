import React from 'react';
import { connect } from 'react-redux';
import Keboard from '../components/keyboard';

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<Keboard />
			</div>
		);
	}
}

export default connect(store => {
	return {
		matches: store.matches
	};
})(Keboard);