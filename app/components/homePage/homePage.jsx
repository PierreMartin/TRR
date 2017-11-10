import React from 'react';
import PropTypes from 'prop-types';
import image from '@image/cat.jpg';
import { typingCreateCourseAction, createCourseAction } from '../../actions/courses';
import ModuleX from './moduleX/moduleX';
import { connect } from 'react-redux';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
	}

	componentDidMount() {
		const { courses, typingCreateCourseState } = this.props;
		console.log(courses);
		console.log(typingCreateCourseState);
		// this.log('componentDidMount');
	}

	componentDidUpdate() {
		this.log('componentDidUpdate');
	}

	handleChangeMessage(event) {
		this.props.typingCreateCourseAction(event.target.value);
		this.log('handleChangeMessage');
	}

	handleSubmitMessage(event) {
		if (event.which === 13) {
			event.preventDefault();
			this.props.createCourseAction(event.target.value.trim());
			this.log('handleSubmitMessage');
		}
	}

	log(componant) {
		console.log(componant, this.props);
	}

	render() {
		const { typingCreateCourseState } = this.props;

		return (
			<div>
				<h1>Hello, world!</h1>
				<img src={image} alt="cat" />

				<ModuleX
					placeholder="Write something here"
					handleChangeMessage={this.handleChangeMessage}
					handleSubmitMessage={this.handleSubmitMessage}
					value={typingCreateCourseState}
				/>
				<p>{ typingCreateCourseState }</p>

			</div>
		);
	}
}

/*
HomePage.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol
};
*/

// TODO verifier pourquoi XxxXxxAction est imbriqué dans this.props
// TODO mettre les logs redux

HomePage.propTypes = {
	courses: PropTypes.arrayOf.isRequired,
	typingCreateCourseAction: PropTypes.func.isRequired,
	typingCreateCourseState: PropTypes.string.isRequired,
	createCourseAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses.courses,
		typingCreateCourseState: state.courses.typingCreateCourseState
	};
};

export default connect(mapStateToProps, { typingCreateCourseAction, createCourseAction })(HomePage);
