import { Button as ChakraButton } from '@chakra-ui/react';
import { oneOfType, string, node } from 'prop-types';

const Button = ({ children, ...buttonProps }) => {
	return (
		<ChakraButton
			isLoading={false}
			colorScheme="teal"
			variant="solid"
			mt={2}
			mb={2}
			{...buttonProps}
		>
			{children}
		</ChakraButton>
	);
};

Button.propTypes = {
	children: oneOfType([string, node]).isRequired,
};

export default Button;
