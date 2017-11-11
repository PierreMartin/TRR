import React, { PropTypes } from 'react';

const CoursesList = ({ courses }) => {
	let coursesNode = '';
	if (courses.length > 0) {
		coursesNode = courses.map((course, key) => {
			return (
				<li key={key}>
					<div><strong>Title: {course.title}</strong></div>
					<div>Description: {course.description}</div>
					<div>Price: {course.price}</div>
					<hr />
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
