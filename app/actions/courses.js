import request from 'axios';
import * as types from '@types';

export function makeCourseRequest(method, id, data, api = '/api/course') {
	return request[method](api + (id ? ('/' + id) : ''), data);
}

/************************ Create courses ***********************/
export function typingCreateCourseAction(text) {
	return {
		type: types.TYPING_CREATE_COUR_ACTION,
		typingCurrentValue: text
	};
}

export function createCourseSuccess(data) {
	return {
		type: types.CREATE_COURS_SUCCESS,
		id: data.id,
		count: data.count,
		text: data.text
	};
}

export function createCourseFailure(data) {
	return {
		type: types.CREATE_COURS_FAILURE,
		id: data.id,
		error: data.error
	};
}

export function createCourseAction(text) {
	return (dispatch, getState) => {
		if (text.trim().length <= 0) return;

		const id = text + new Date();
		const data = {
			count: 0,
			id,
			text
		};

		// request :
		return makeCourseRequest('post', id, data)
			.then(res => {
				if (res.status === 200) return dispatch(createCourseSuccess(data));
			})
			.catch(() => {
				return dispatch(createCourseFailure({id, error: 'Oops! Something went wrong and we couldn\'t create your cours'}));
			});
	};
}
