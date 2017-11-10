import React, { PropTypes } from 'react';

const CoursesList = ({ courses }) => {
	let coursesNode = '';
	if (courses.length > 0) {
		coursesNode = courses.map((course, key) => {
			return (
				<li key={key}>
					<span>text={course.text}</span>
					<span>count={course.count}</span>
				</li>
			);
		});
	}

	return (
		<div>
			<h3>List of course :</h3>

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
