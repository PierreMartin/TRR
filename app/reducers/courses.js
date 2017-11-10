import { combineReducers } from 'redux';
import * as types from '@types';

const course = (state = {}, action) => {
	switch (action.type) {
		case types.CREATE_COURS_SUCCESS:
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
		case types.GET_COURS_SUCCESS:
			if (action.data) return action.data;
			return state;
		case types.GET_COURS_FAILURE:
			return state;
		case types.CREATE_COURS_SUCCESS:
			return [...state, course(undefined, action)];
		case types.CREATE_COURS_FAILURE:
			return state.filter(t => t.id !== action.id);
		default:
			return state;
	}
};


const typingCreateCourState = (state = '', action) => {
	switch (action.type) {
		case types.TYPING_CREATE_COUR_ACTION:
			return action.typingCurrentValue;
		case types.CREATE_COURS_SUCCESS:
			return '';
		default:
			return state;
	}
};

const courseReducer = combineReducers({
	courses,
	typingCreateCourState
});

export default courseReducer;
