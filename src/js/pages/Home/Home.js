import { Switch, Route, Redirect } from 'react-router-dom';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import Booking from 'pages/Booking';
import Confirmation from 'pages/Confirmation';
import Loader from 'components/Loader';

const Home = ({ isLoading }) => {
	return isLoading ? (
		<Loader />
	) : (
		<Switch>
			<Route path="/booking" component={Booking} />
			<Route path="/confirmation" component={Confirmation} />
			<Route exact path="/" render={() => <Redirect to="/booking" />} />
		</Switch>
	);
};

Home.propTypes = {
	isLoading: bool,
};

Home.defaultProps = {
	isLoading: false,
};

const mapStateToProps = ({ booking }) => ({
	isLoading: booking.isLoading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
