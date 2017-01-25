import { FETCH_MATCHES_SUCCESS, FETCH_MATCHES_FAIL } from '../constants/actionTypes';

const defaultState = {
	allMatches: [],
	dictionaryMatches: [],
	error: null
};

export default function reducer(state = defaultState, action) {
	switch(action.type) {
		case FETCH_MATCHES_FAIL: {
			return {
				...state,
				error: action.payload
			};
		}
		case FETCH_MATCHES_SUCCESS: {
			return {
				...state,
				allMatches: action.payload
			};
		}
		default:
			return state;
	}
};