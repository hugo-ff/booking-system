import Calendar from 'components/Calendar';
import Select from 'components/Select';
import { arrayOf, objectOf, string } from 'prop-types';
import { connect } from 'react-redux';
import { HOURS } from '../../constants';
import styles from './styles';

const Booking = ({ gradesData, selectedData }) => {
	const startHourIndex = HOURS.indexOf(selectedData.startHour);
	const endHourOptionsArr = startHourIndex !== -1 ? [...HOURS].slice(startHourIndex) : HOURS;

	return (
		<>
			<Select options={gradesData} placeholder="Selecciona especialidad" selectType="grades" />
			<styles.SelectHourWrapper>
				<Select options={HOURS} placeholder="Desde:" selectType="startHour" />
				<Select options={endHourOptionsArr} placeholder="Hasta:" selectType="endHour" />
			</styles.SelectHourWrapper>
			<div>Booking</div>
			<Calendar />
		</>
	);
};

Booking.propTypes = {
	gradesData: arrayOf(string),
	selectedData: objectOf(string),
};

Booking.defaultProps = {
	gradesData: [],
	selectedData: {},
};

const mapStateToProps = ({ booking, selections }) => ({
	gradesData: booking.gradesData,
	selectedData: selections.selectionsData,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
