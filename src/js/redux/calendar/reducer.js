import types from './types';

const initialState = {
	selectedDates: {},
};

const datesSelection = (state = initialState, { type, payload }) => {
	if (type === types.SET_DATES_SELECTION) {
		return {
			...state,
			selectedDates: payload,
		};
	}

	return state;
};

export default datesSelection;
