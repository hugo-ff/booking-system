import { element } from 'prop-types';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import getBookingData from '../../redux/booking/operations';
import store from '../../redux/store';
import styles from './styles';

store.dispatch(getBookingData());

const MainLayout = ({ children }) => (
	<BrowserRouter>
		<ChakraProvider>
			<Provider store={store}>
				<styles.MainLayout data-testid="mainLayout">{children}</styles.MainLayout>
			</Provider>
		</ChakraProvider>
	</BrowserRouter>
);

MainLayout.propTypes = {
	children: element.isRequired,
};

export default MainLayout;
