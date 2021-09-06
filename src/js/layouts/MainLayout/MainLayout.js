import { element } from 'prop-types';
import { Provider } from 'react-redux';
import getBookingData from '../../redux/booking/operations';
import store from '../../redux/store';

store.dispatch(getBookingData());

const MainLayout = ({ children }) => (
	<Provider store={store}>
		<div data-testid="mainLayout">{children}</div>
	</Provider>
);

MainLayout.propTypes = {
	children: element.isRequired,
};

export default MainLayout;
