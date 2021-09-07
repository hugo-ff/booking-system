import { useState } from 'react';
import { arrayOf, shape, bool, string, objectOf } from 'prop-types';
import { ChatIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import BookingCard from 'components/BookingCard';
import getHealthStaffData from '../../redux/confirmation/operations';
import store from '../../redux/store';
import styles from './styles';
import filterByUserSettings from './utils';

store.dispatch(getHealthStaffData());

const Confirmation = ({ healthProfessionals, isLoading, selectedData, dates }) => {
	const [selectedBooking, setSelectedBooking] = useState([]);

	const handleSelect = el => {
		if (Object.values(el)[0]) return setSelectedBooking([...selectedBooking, el]);
		const updatedBooking = selectedBooking.filter(sb => Object.keys(sb)[0] !== Object.keys(el)[0]);
		return setSelectedBooking(updatedBooking);
	};

	const handleConfirmation = () => {
		console.log('selectedBooking', selectedBooking);
	};

	const bookings = filterByUserSettings(healthProfessionals, selectedData, dates);

	const bookingsRender = bookings.map(b => {
		const {
			isAvailable,
			imageUrl,
			id,
			name,
			hours: { starts, ends },
			days,
		} = b;

		const formattedDates = dates.map(date => date.toString().substring(0, 15));

		const matchedDates = formattedDates.filter(date =>
			days.find(day => date.toString().includes(day))
		);

		const hourRange = `${starts} - ${ends}`;
		const datesToShow = matchedDates.join(', ');

		const staffText = isAvailable
			? `${name} is available`
			: 'Suitable staff member will be assigned';

		return (
			<BookingCard
				key={id}
				id={id}
				staffText={staffText}
				imageUrl={imageUrl}
				isAvailable={isAvailable}
				hourRange={hourRange}
				datesToShow={datesToShow}
				handleSelect={handleSelect}
				name={name}
			/>
		);
	});

	return isLoading ? (
		<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
	) : (
		<styles.Confirmation>
			<Navbar text="Accept Bookings" buttonVariant="goBack" />
			<styles.Wrapper>
				<styles.RowContainer>
					<styles.Title>Bookings to be Confirmed</styles.Title>
				</styles.RowContainer>
				<styles.BookingsContainer>{bookingsRender}</styles.BookingsContainer>
				{!!bookingsRender.length && (
					<Button width="60%" onClick={handleConfirmation}>
						CONFIRM BOOKINGS
					</Button>
				)}
				<styles.ChatIconContainer>
					<ChatIcon w={10} h={10} m={2} />
				</styles.ChatIconContainer>
			</styles.Wrapper>
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
	dates: arrayOf(shape({})),
};

Confirmation.defaultProps = {
	healthProfessionals: [],
	isLoading: false,
	selectedData: {},
	dates: [],
};

const mapStateToProps = ({ confirmation, selections, calendar }) => ({
	healthProfessionals: confirmation.healthProfessionals,
	isLoading: confirmation.isLoading,
	selectedData: selections.selectionsData,
	dates: calendar.selectedDates,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
