import React from 'react';
import PropTypes from 'prop-types';
import image from '@image/cat.jpg';
import { typingCreateCourseAction, createCoursAction } from '../../actions/courses';
import ModuleX from './moduleX/moduleX';
import { connect } from 'react-redux';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
	}

	componentDidMount() {
		const { courses } = this.props;
		console.log(courses);
		// this.log('componentDidMount');
	}

	componentDidUpdate() {
		this.log('componentDidUpdate');
	}

	handleChangeMessage(event) {
		typingCreateCourseAction(event.target.value.trim());
		this.log('handleChangeMessage');
	}

	handleSubmitMessage(event) {
		if (event.which === 13) {
			event.preventDefault();
			createCoursAction(event.target.value.trim());
			this.log('handleSubmitMessage');
		}
	}

	log(componant) {
		console.log(componant, this.props);
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<img src={image} alt="cat" />

				<ModuleX
					placeholder="Write something here"
					handleChangeMessage={this.handleChangeMessage}
					handleSubmitMessage={this.handleSubmitMessage}
					value={this.props.textChange}
				/>
				<p>{ this.props.text }</p>

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

// TODO mettre les logs redux

HomePage.propTypes = {
	courses: PropTypes.arrayOf.isRequired
};

const mapStateToProps = (state) => {
	return {
		courses: state.courses.coursesList,
		textChange: state.courses.textChange,
		text: state.courses.text,
	};
};

export default connect(mapStateToProps, null)(HomePage);
