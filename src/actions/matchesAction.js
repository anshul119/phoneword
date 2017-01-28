import request from 'superagent'

export function fetchMatches(options) {
	return dispatch => {
		request.get(`/api?number=${options.typedNumber}&dictionary=${options.dictionary}`)
		.then(response => {
			dispatch({type: 'FETCH_MATCHES_SUCCESS', payload: response.body})
		})
		.catch(err => {
			dispatch({type: 'FETCH_MATCHES_FAIL', payload: err})
		})
	}
}