import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilmsAction } from '../../actions/courses';

class FilmsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchFilmsAction();
	}

	render() {
		return (
			<div>
				<h3>List of Films</h3>
				blha blah...
			</div>
		);
	}
}

FilmsPage.propTypes = {
	fetchFilmsAction: PropTypes.func.isRequired
};

export default connect(null, { fetchFilmsAction })(FilmsPage);

