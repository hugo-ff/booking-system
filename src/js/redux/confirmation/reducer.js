import types from './types';

const initialState = {
	healthProfessionals: [],
	isLoading: true,
};

const confirmation = (state = initialState, { type, payload }) => {
	if (type === types.GET_PROFESSIONALS_DATA) {
		return {
			...state,
			healthProfessionals: payload,
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

export default confirmation;
