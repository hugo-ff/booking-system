import types from './types';

const setDatesSelection = data => ({
	type: types.SET_DATES_SELECTION,
	payload: data,
});

export default setDatesSelection;
