import types from './types';

const initialState = {
	selectionsData: {},
};

const selections = (state = initialState, { type, payload }) => {
	if (type === types.SET_SELECTION) {
		return {
			...state,
			selectionsData: payload,
		};
	}

	return state;
};

export default selections;
