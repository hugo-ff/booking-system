import styled from 'styled-components';

const Confirmation = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	max-width: 400px;
	padding: 15px;
	flex-grow: 1;
`;

const ChatIconContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	transition: transform 250ms;

	&:hover {
		transform: translateY(-10px);
	}
`;

const RowContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
`;

const BookingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 5px;
	overflow-y: auto;
`;

const Title = styled.h1`
	font-size: 20px;
	letter-spacing: 0.5px;
	font-weight: 700;
`;

export default {
	SpinnerContainer,
	Confirmation,
	Wrapper,
	ChatIconContainer,
	RowContainer,
	BookingsContainer,
	Title,
};
