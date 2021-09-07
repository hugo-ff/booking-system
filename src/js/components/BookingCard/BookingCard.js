import { Radio } from '@chakra-ui/react';
import { string, bool, func, shape } from 'prop-types';
import styles from './styles';

const BookingCard = ({ imageUrl, name, hours, isAvailable, id, datesToShow, setBookingData }) => {
	const imgUrl = isAvailable ? imageUrl : 'https://randomuser.me/api/portraits/lego/1.jpg';
	const staffText = isAvailable ? `${name} is available` : 'Suitable staff member will be assigned';

	const { starts, ends } = hours;

	const hourRange = `${starts} - ${ends}`;

	const bookingData = {
		id,
		name,
		imageUrl,
		starts,
		ends,
	};

	const handleOnChange = () => setBookingData(bookingData);

	return (
		<styles.BookingCard>
			<styles.UserImage src={imgUrl} />
			<styles.ColumnContainer>
				<styles.Date>{datesToShow}</styles.Date>
				<styles.Text isAvailable={isAvailable}>{staffText}</styles.Text>
			</styles.ColumnContainer>
			<styles.ColumnContainerRight>
				<styles.Hours>{hourRange}</styles.Hours>
				<Radio value={id} onChange={handleOnChange} />
			</styles.ColumnContainerRight>
		</styles.BookingCard>
	);
};

BookingCard.propTypes = {
	imageUrl: string,
	name: string,
	hours: shape({ starts: string, ends: string }),
	isAvailable: bool,
	id: string,
	datesToShow: string,
	setBookingData: func,
};

BookingCard.defaultProps = {
	imageUrl: '',
	name: '',
	hours: {},
	isAvailable: false,
	id: '',
	datesToShow: '',
	setBookingData: () => {},
};

export default BookingCard;
