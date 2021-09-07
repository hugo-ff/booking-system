import styled, { css } from 'styled-components';

const BookingCard = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 80px;
	border: 2px solid #616161;
	margin: 5px auto;
`;

const UserImage = styled.img`
	border-radius: 50%;
	width: 45px;
	height: 45px;
	margin: 0 5px;
`;

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;

const ColumnContainerRight = styled(ColumnContainer)(css`
	align-items: flex-end;
	width: 100px;
	padding-right: 10px;
`);

const Date = styled.p`
	font-weight: bold;
	font-size: 11px;
`;

const Text = styled.p`
	font-size: 12px;
	color: ${({ isAvailable }) => (isAvailable ? 'green' : 'orange')};
	font-weight: 500;
`;

const Hours = styled.p`
	font-size: 10px;
	font-weight: 400;
	color: #616161;
	margin-bottom: 10px;
`;

export default { BookingCard, UserImage, ColumnContainer, Date, Text, Hours, ColumnContainerRight };
