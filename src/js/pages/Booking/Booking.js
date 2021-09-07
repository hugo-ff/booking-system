import { arrayOf, objectOf, string, oneOfType } from 'prop-types';
import { connect } from 'react-redux';
import { Checkbox, useToast } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Calendar from 'components/Calendar';
import Select from 'components/Select';
import Button from 'components/Button';
import Navbar from 'components/Navbar';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { HOURS } from 'js/constants';
import styles from './styles';

const Booking = ({ gradesData, selectedData, selectedDates }) => {
	const startHourIndex = HOURS.indexOf(selectedData.startHour);
	const endHourOptionsArr = startHourIndex !== -1 ? [...HOURS].slice(startHourIndex) : HOURS;
	const toast = useToast();
	const history = useHistory();

	const handleOnSubmit = () => {
		const { endHour, grades, startHour } = selectedData;

		if (!selectedDates || !endHour || !grades || !startHour) {
			return toast({
				title: `Form imcomplete`,
				description:
					'You have to select both grade and date as well as a time range in order to create a booking.',
				status: 'error',
				duration: 9000,
				isClosable: true,
			});
		}

		return history.push('/confirmation');
	};

	return (
		<>
			<Navbar text="Make a Booking" />
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
			<Button width="100%" onClick={handleOnSubmit}>
				CREATE BOOKINGS
			</Button>
		</>
	);
};

Booking.propTypes = {
	gradesData: arrayOf(string),
	selectedData: objectOf(string),
	selectedDates: arrayOf(oneOfType([string || Date])),
};

Booking.defaultProps = {
	gradesData: [],
	selectedData: {},
	selectedDates: [],
};

const mapStateToProps = ({ booking, selections, calendar }) => ({
	gradesData: booking.gradesData,
	selectedData: selections.selectionsData,
	selectedDates: calendar.selectedDates,
});

export default connect(mapStateToProps, () => ({}))(Booking);
