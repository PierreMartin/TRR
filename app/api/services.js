import restApiClient from './../middlewares/restApiClient';

export function api() {
	const localhostUrl = 'http://localhost:3000';
	const swapiUrl = 'https://swapi.co';

	const localClient = restApiClient().withConfig({ baseURL: localhostUrl });
	const swapiClient = restApiClient().withConfig({ baseURL: swapiUrl });

	return {
		// Courses :
		getCourses: () => localClient.request({
			method: 'GET',
			url: '/api/getcourses'
		}),
		getCourseById: id => localClient.request({
			method: 'GET',
			url: '/api/getcourse/' + id
		}),
		createCourse: data => localClient.request({
			method: 'POST',
			url: '/api/addcourse/' + data.id,
			data
		}),
		deleteCourse: id => localClient.request({
			method: 'DELETE',
			url: '/api/course/' + id
		}),
		updateCourse: (id, data) => localClient.request({
			method: 'PUT',
			url: '/api/course/' + id,
			data
		}),

		// Films (example with swapi API) :
		getFilms: () => swapiClient.request({
			method: 'GET',
			url: '/api/films/1/'
		})
	};
}
