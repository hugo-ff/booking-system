import { Spinner } from '@chakra-ui/react';
import styles from './styles';

const Loader = () => (
	<styles.SpinnerContainer>
		<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
	</styles.SpinnerContainer>
);

export default Loader;
