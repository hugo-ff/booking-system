import { Checkbox } from '@chakra-ui/react';
import { string, bool, func } from 'prop-types';
import styles from './styles';

const BookingCard = ({
	imageUrl,
	name,
	hourRange,
	isAvailable,
	staffText,
	handleSelect,
	id,
	datesToShow,
}) => {
	const imgUrl = isAvailable ? imageUrl : 'https://randomuser.me/api/portraits/lego/1.jpg';
	const handleChange = e => {
		const bookingData = {
			[id]: e.target.checked,
			name,
			imageUrl,
			hourRange,
		};
		handleSelect(bookingData);
	};
	return (
		<styles.BookingCard>
			<styles.UserImage src={imgUrl} />
			<styles.ColumnContainer>
				<styles.Date>{datesToShow}</styles.Date>
				<styles.Text isAvailable={isAvailable}>{staffText}</styles.Text>
			</styles.ColumnContainer>
			<styles.ColumnContainerRight>
				<styles.Hours>{hourRange}</styles.Hours>
				<Checkbox onChange={e => handleChange(e)} />
			</styles.ColumnContainerRight>
		</styles.BookingCard>
	);
};

BookingCard.propTypes = {
	imageUrl: string,
	name: string,
	hourRange: string,
	isAvailable: bool,
	staffText: string,
	handleSelect: func,
	id: string,
	datesToShow: string,
};

BookingCard.defaultProps = {
	imageUrl: '',
	name: '',
	hourRange: '',
	isAvailable: false,
	staffText: '',
	handleSelect: () => {},
	id: '',
	datesToShow: '',
};

export default BookingCard;
