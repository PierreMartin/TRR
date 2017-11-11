import React, { PropTypes } from 'react';

const CoursesList = ({ courses }) => {
	let coursesNode = '';
	if (courses.length > 0) {
		coursesNode = courses.map((course, key) => {
			return (
				<li key={key}>
					<span>text={course.title}</span>
					<span>count={course.description}</span>
					<span>count={course.price}</span>
				</li>
			);
		});
	}

	return (
		<div>
			<h3>List of courses :</h3>

			<ul>
				{coursesNode}
			</ul>

		</div>
	);
};


CoursesList.propTypes = {
	// courses: PropTypes.arrayOf.isRequired
};

export default CoursesList;
