import { api } from './services';
import courses from './courses.json';

/********************************************** Courses ***********************************************/
export const fetchCoursesRequest = () => {
	return api().getCourses()
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(courses); // set 'err' as parameter in real world
		});
};

export const fetchCourseRequest = (id) => {
	return api().getCourseById(id)
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

export const createCourseRequest = (data) => {
	return api().createCourse(data)
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};

/********************************************** Market Bittrex ***********************************************/
export const getFilmsRequest = () => {
	return api().getFilms()
		.then((res) => {
			if (res.status === 200) return Promise.resolve(res);
		})
		.catch((err) => {
			return Promise.reject(err);
		});
};