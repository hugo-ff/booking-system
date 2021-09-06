import types from './types';

export const getGradesData = data => ({
	type: types.GET_GRADES_DATA,
	payload: data,
});

export const setLoading = payload => ({
	type: types.SET_LOADING,
	payload,
});
