import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMarketsAction } from '../../actions/courses';

class marketsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchMarketsAction();
	}

	render() {
		return (
			<div>
				<h3>List of Market</h3>
				blha blah...
			</div>
		);
	}
}

marketsPage.propTypes = {
	fetchMarketsAction: PropTypes.func.isRequired
};

export default connect(null, { fetchMarketsAction })(marketsPage);

