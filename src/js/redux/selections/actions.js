import types from './types';

const setSelection = data => ({
	type: types.SET_SELECTION,
	payload: data,
});

export default setSelection;
