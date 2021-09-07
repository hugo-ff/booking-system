import axios from 'axios';
import { API_URL } from 'js/constants';
import { setLoading, getGradesData } from './actions';

const getBookingData = () => async dispatch => {
	try {
		const { data } = await axios.get(API_URL);
		const { grades } = data;
		dispatch(getGradesData(grades));
		return dispatch(setLoading(false));
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return dispatch(setLoading(false));
	}
};

export default getBookingData;
