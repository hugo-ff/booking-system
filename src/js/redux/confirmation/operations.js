import { HEALTH_PROFESSIONALS } from 'js/constants';
import { setLoading, getProfessionalsData } from './actions';

const getHealthStaffData = () => async dispatch => {
	try {
		const { data } = HEALTH_PROFESSIONALS;
		const { professionals } = data;
		dispatch(getProfessionalsData(professionals));
		return dispatch(setLoading(false));
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return dispatch(setLoading(false));
	}
};

export default getHealthStaffData;
