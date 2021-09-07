import types from './types';

const initialState = {
	healthProfessionals: [],
	isLoading: true,
	booking: {},
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

	if (type === types.SET_BOOKING_DATA) {
		return {
			...state,
			booking: payload,
		};
	}

	return state;
};

export default confirmation;
