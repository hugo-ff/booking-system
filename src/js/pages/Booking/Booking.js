import { arrayOf, objectOf, string } from 'prop-types';
import { connect } from 'react-redux';
import { Checkbox } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Calendar from 'components/Calendar';
import Select from 'components/Select';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { HOURS } from 'js/constants';
import styles from './styles';

const Booking = ({ gradesData, selectedData }) => {
	const startHourIndex = HOURS.indexOf(selectedData.startHour);
	const endHourOptionsArr = startHourIndex !== -1 ? [...HOURS].slice(startHourIndex) : HOURS;

	return (
		<>
			<Navbar />
			<styles.BookingContainer>
				<styles.RowContainer>
					<styles.Title>Book from Scratch</styles.Title>
					<Button variant="outline" border="2px" borderColor="green.500">
						Re-Book Staff
					</Button>
				</styles.RowContainer>
				<Select options={gradesData} placeholder="Select grade" selectType="grades" />
				<styles.SelectHourWrapper>
					<Select options={HOURS} placeholder="Since:" selectType="startHour" />
					<ArrowForwardIcon w={6} h={6} m={2} />
					<Select options={endHourOptionsArr} placeholder="Until:" selectType="endHour" />
				</styles.SelectHourWrapper>
				<Checkbox size="lg" colorScheme="blue" defaultIsChecked>
					Been Before
				</Checkbox>
				<Button variant="outline">Edit Default Settings (2 modified)</Button>
				<Calendar />
			</styles.BookingContainer>
			<Link to="/confirmation">
				<Button width="100%">Create Bookings</Button>
			</Link>
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
