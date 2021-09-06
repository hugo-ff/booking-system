import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import styles from './styles';

const MENU_ITEMS = ['New Booking', 'All My Bookings', 'My Results'];

const menuItemsRender = MENU_ITEMS.map((item, idx) => {
	return <MenuItem key={idx.toString()}>{item}</MenuItem>;
});

const Navbar = () => {
	return (
		<styles.Navbar>
			<Menu variant="filled">
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<HamburgerIcon />}
					variant="outline"
					transition="all 0.2s"
					borderRadius="md"
					borderWidth="1px"
					_hover={{ bg: 'gray.400' }}
					_expanded={{ bg: 'blue.400' }}
					_focus={{ boxShadow: 'outline' }}
				/>
				<MenuList>{menuItemsRender}</MenuList>
				<styles.Text>Make a Booking</styles.Text>
				<styles.SessionAvatar>MS</styles.SessionAvatar>
			</Menu>
		</styles.Navbar>
	);
};

export default Navbar;
