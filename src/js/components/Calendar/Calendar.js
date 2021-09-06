import { useState, useEffect } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import setDatesSelection from '../../redux/calendar/actions';
import 'react-day-picker/lib/style.css';

const Calendar = ({ setSelectedDates }) => {
	const [selectedDays, setSelectedDays] = useState([]);

	useEffect(() => {
		setSelectedDates(selectedDays);
	}, [selectedDays]);

	const handleDayClick = (day, { selected }) => {
		const pickedDays = selectedDays.concat();

		if (selected) {
			const selectedIndex = pickedDays.findIndex(selectedDay =>
				DateUtils.isSameDay(selectedDay, day)
			);
			pickedDays.splice(selectedIndex, 1);
		} else {
			pickedDays.push(day);
		}

		return setSelectedDays(pickedDays);
	};
	return (
		<DayPicker
			selectedDays={selectedDays}
			onDayClick={handleDayClick}
			disabledDays={[new Date(2021, 9, 6), { daysOfWeek: [0, 7] }]}
		/>
	);
};

Calendar.propTypes = {
	setSelectedDates: func,
};

Calendar.defaultProps = {
	setSelectedDates: () => {},
};

const mapDispatchToProps = dispatch => ({
	setSelectedDates(selectedDays) {
		dispatch(setDatesSelection(selectedDays));
	},
});

export default connect(() => ({}), mapDispatchToProps)(Calendar);
