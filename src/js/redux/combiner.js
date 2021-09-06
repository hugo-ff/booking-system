import { combineReducers } from 'redux';
import booking from './booking/reducer';
import selections from './selections/reducer';
import calendar from './calendar/reducer';

export default combineReducers({
	booking,
	selections,
	calendar,
});
