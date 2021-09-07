import { useState } from 'react';
import { arrayOf, shape, bool, string, objectOf, func } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ChatIcon } from '@chakra-ui/icons';
import { RadioGroup, useToast } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import BookingCard from 'components/BookingCard';
import { validateArray } from 'utils';
import { setBooking } from '../../redux/confirmation/actions';
import getHealthStaffData from '../../redux/confirmation/operations';
import store from '../../redux/store';
import styles from './styles';
import findByUserPreferences from './utils';

store.dispatch(getHealthStaffData());

const Confirmation = ({
	healthProfessionals,
	isLoading,
	selectedData,
	selectedDates,
	setAppointment,
}) => {
	const [radioSelected, setRadioSelected] = useState([]);
	const [bookingData, setBookingData] = useState({});
	const toast = useToast();
	const history = useHistory();

	const handleConfirmation = () => {
		const { name, starts, ends, queryDate } = bookingData;
		const successMessage = `You have a booking with ${name} on ${queryDate} between ${starts} and ${ends}.`;
		toast({
			title: 'Booking confirmed.',
			description: successMessage,
			status: 'success',
			duration: 9000,
			isClosable: true,
			onCloseComplete: () => history.push('/booking'),
		});
		setAppointment({
			successMessage,
			healthProfessional: bookingData,
		});
		// eslint-disable-next-line no-console
		console.log('Success!', successMessage, 'Booking Data:', bookingData);
	};

	const matches = findByUserPreferences(healthProfessionals, selectedData, selectedDates);

	const bookingsToRender =
		validateArray(matches) &&
		matches.map((match, idx) => {
			return <BookingCard key={idx.toString()} {...match} setBookingData={setBookingData} />;
		});

	return isLoading ? (
		<Loader />
	) : (
		<styles.Confirmation>
			<Navbar text="Accept Bookings" buttonVariant="goBack" />
			{bookingsToRender.length ? (
				<styles.Wrapper>
					<styles.RowContainer>
						<styles.Title>Bookings to be Confirmed</styles.Title>
					</styles.RowContainer>
					<styles.BookingsContainer>
						<RadioGroup onChange={setRadioSelected} value={radioSelected}>
							{bookingsToRender}
						</RadioGroup>
					</styles.BookingsContainer>
					<Button width="60%" onClick={handleConfirmation}>
						CONFIRM BOOKINGS
					</Button>
					<styles.ChatIconContainer>
						<ChatIcon w={10} h={10} m={2} />
					</styles.ChatIconContainer>
				</styles.Wrapper>
			) : (
				toast({
					title: 'Empty search.',
					description: 'There are not coincidences with your search, please try again.',
					status: 'warning',
					duration: 9000,
					isClosable: true,
					onCloseComplete: () => history.push('/booking'),
				})
			)}
		</styles.Confirmation>
	);
};

Confirmation.propTypes = {
	healthProfessionals: arrayOf(
		shape({
			name: string,
			imageUrl: string,
			days: arrayOf(string),
			hours: shape({
				starts: string,
				ends: string,
			}),
			grade: arrayOf(string),
			isAvailable: bool,
		})
	),
	isLoading: bool,
	selectedData: objectOf(string),
	selectedDates: arrayOf(shape({})),
	setAppointment: func,
};

Confirmation.defaultProps = {
	healthProfessionals: [],
	isLoading: false,
	selectedData: {},
	selectedDates: [],
	setAppointment: () => {},
};

const mapStateToProps = ({ confirmation, selections, calendar }) => ({
	healthProfessionals: confirmation.healthProfessionals,
	isLoading: confirmation.isLoading,
	selectedData: selections.selectionsData,
	selectedDates: calendar.selectedDates,
});

const mapDispatchToProps = dispatch => ({
	setAppointment(booking) {
		dispatch(setBooking(booking));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
