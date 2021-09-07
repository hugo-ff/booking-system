import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import styles from './styles';

const MENU_ITEMS = ['New Booking', 'All My Bookings', 'My Results'];

const menuItemsRender = MENU_ITEMS.map((item, idx) => {
	return <MenuItem key={idx.toString()}>{item}</MenuItem>;
});

const Navbar = ({ text, buttonVariant }) => {
	return (
		<styles.Navbar>
			<Menu variant="filled">
				<Link to={buttonVariant === 'goBack' && '/booking'}>
					<MenuButton
						as={IconButton}
						aria-label="Options"
						icon={buttonVariant === 'goBack' ? <ChevronLeftIcon /> : <HamburgerIcon />}
						variant="outline"
						transition="all 0.2s"
						borderRadius="md"
						borderWidth="1px"
						_hover={{ bg: 'gray.400' }}
						_expanded={{ bg: 'blue.400' }}
						_focus={{ boxShadow: 'outline' }}
					/>
				</Link>
				<MenuList>{menuItemsRender}</MenuList>
				<styles.Text>{text}</styles.Text>
				<styles.SessionAvatar>MS</styles.SessionAvatar>
			</Menu>
		</styles.Navbar>
	);
};

Navbar.propTypes = {
	text: string,
	buttonVariant: string,
};

Navbar.defaultProps = {
	text: '',
	buttonVariant: '',
};

export default Navbar;
