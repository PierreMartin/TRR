import restApiClient from './../middlewares/restApiClient';

export function api() {
	const localhostUrl = 'http://localhost:3000';
	const bittrexUrl = 'https://bittrex.com';

	const localClient = restApiClient().withConfig({ baseURL: localhostUrl });
	const bittrexClient = restApiClient().withConfig({ baseURL: bittrexUrl });

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
		deleteCourse: id => localClient.request({
			method: 'DELETE',
			url: '/api/course/' + id
		}),
		updateCourse: (id, data) => localClient.request({
			method: 'PUT',
			url: '/api/course/' + id,
			data
		}),
		createCourse: data => localClient.request({
			method: 'POST',
			url: '/api/addcourse/' + data.id,
			data
		}),

		// Market Bittrex (example with Bittrex) :
		getMarkets: () => bittrexClient.request({
			method: 'POST',
			url: '/api/v1.1/public/getmarkets'
		})
	};
}
