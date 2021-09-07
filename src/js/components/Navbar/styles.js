import styled from 'styled-components';

const Text = styled.span`
	font-weight: 700;
	letter-spacing: 0.5px;
	flex-grow: 1;
	text-align: center;
`;

const Navbar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

const SessionAvatar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: gray;
	color: white;
	font-size: 12px;
	font-weight: 700;
	padding: 2px;
	margin-right: 10px;
`;

export default { Text, Navbar, SessionAvatar };
