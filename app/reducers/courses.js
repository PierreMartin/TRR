import { combineReducers } from 'redux';
import * as types from '@types';

const course = (state = {}, action) => {
	switch (action.type) {
		case types.CREATE_COURSE_SUCCESS:
			return {
				id: action.id,
				count: action.count,
				text: action.text
			};
		default:
			return state;
	}
};


const courses = (state = [], action) => {
	switch (action.type) {
		case types.GET_COURSES_SUCCESS:
		case types.GET_COURSES_FAILURE:
			if (action.data) return action.data;
			return state;
		/*
		case types.GET_COURSES_FAILURE:
			return state;
		*/
		case types.CREATE_COURSE_SUCCESS:
			return [...state, course(undefined, action)];
		case types.CREATE_COURSE_FAILURE:
			return state.filter(t => t.id !== action.id);
		default:
			return state;
	}
};


const typingCreateCourseState = (state = '', action) => {
	switch (action.type) {
		case types.TYPING_CREATE_COURSE_ACTION:
			return action.typingCurrentValue;
		case types.CREATE_COURSE_SUCCESS:
			return '';
		default:
			return state;
	}
};

const courseReducer = combineReducers({
	courses,
	typingCreateCourseState
});

export default courseReducer;
