import styled from 'styled-components';

const BookingContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	padding: 15px;
`;

const RowContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

const Title = styled.h2`
	font-weight: 700;
	letter-spacing: 1px;
	font-size: 18px;
`;

const SelectHourWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export default { BookingContainer, Title, RowContainer, SelectHourWrapper };
