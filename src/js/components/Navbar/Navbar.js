import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import { validateArray } from 'utils';
import styles from './styles';
import menuItems from './menuItems.json';

const menuItemsRender =
	validateArray(menuItems) &&
	menuItems.map(({ id, href }) => {
		return (
			<Link to={href} key={id}>
				<MenuItem>{id}</MenuItem>
			</Link>
		);
	});

const Navbar = ({ text, buttonVariant }) => {
	return (
		<styles.Navbar>
			<Menu variant="filled">
				{buttonVariant === 'goBack' ? (
					<Link to="/booking">
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<ChevronLeftIcon />}
							variant="outline"
							transition="all 0.2s"
							borderRadius="md"
							borderWidth="1px"
							_hover={{ bg: 'gray.400' }}
							_expanded={{ bg: 'blue.400' }}
							_focus={{ boxShadow: 'outline' }}
						/>
					</Link>
				) : (
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
				)}
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
