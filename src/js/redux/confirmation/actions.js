import types from './types';

export const getProfessionalsData = data => ({
	type: types.GET_PROFESSIONALS_DATA,
	payload: data,
});

export const setLoading = payload => ({
	type: types.SET_LOADING,
	payload,
});
