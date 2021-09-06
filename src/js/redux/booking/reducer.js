import types from './types';

const initialState = {
	gradesData: {},
	isLoading: true,
};

const booking = (state = initialState, { type, payload }) => {
	if (type === types.GET_GRADES_DATA) {
		return {
			...state,
			gradesData: payload,
		};
	}

	if (type === types.SET_LOADING) {
		return {
			...state,
			isLoading: payload,
		};
	}

	return state;
};

export default booking;
