import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
	render() {
		return (
			<div className="main">
			</div>
		);
	}
}

export default connect(store => {
	return {
		matches: store.matches
	};
})(Main);