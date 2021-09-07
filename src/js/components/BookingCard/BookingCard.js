import { Radio, Stack } from '@chakra-ui/react';
import { string, bool, func, shape } from 'prop-types';
import { DEFAULT_USER_IMAGE_URL } from 'js/constants';
import styles from './styles';

const BookingCard = ({ imageUrl, name, hours, isAvailable, id, queryDate, setBookingData }) => {
	const imgUrl = isAvailable ? imageUrl : DEFAULT_USER_IMAGE_URL;
	const text = isAvailable ? `${name} is available` : 'Suitable staff member will be assigned';

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
				<styles.Date>{queryDate}</styles.Date>
				<styles.Text isAvailable={isAvailable}>{text}</styles.Text>
			</styles.ColumnContainer>
			<Stack>
				<styles.ColumnContainerRight>
					<styles.Hours>{hourRange}</styles.Hours>
					<Radio value={`${id}${queryDate}`} onChange={handleOnChange} />
				</styles.ColumnContainerRight>
			</Stack>
		</styles.BookingCard>
	);
};

BookingCard.propTypes = {
	imageUrl: string,
	name: string,
	hours: shape({ starts: string, ends: string }),
	isAvailable: bool,
	id: string,
	queryDate: string,
	setBookingData: func,
};

BookingCard.defaultProps = {
	imageUrl: '',
	name: '',
	hours: {},
	isAvailable: false,
	id: '',
	queryDate: '',
	setBookingData: () => {},
};

export default BookingCard;
