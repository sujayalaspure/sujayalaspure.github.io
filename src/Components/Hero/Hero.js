import React from 'react';
import styled from 'styled-components';
import { colors, theme } from '../../Styles';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
export default function Hero() {
	return (
		<Container>
			<LeftSideBar />
			<RightSideBar />
			<HeaderContainer>
				<MinorHeading>Hi, my name is</MinorHeading>
				<NameHeading>Sujay Alaspure</NameHeading>
				<Heading2>I build things for the web/mobile</Heading2>
			</HeaderContainer>
		</Container>
	);
}

const Container = styled.div`
	background: ${colors.navy};
	/* width: ${theme.width.screen}; */
	height: ${theme.height.screen};
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 1080px) {
		padding: 0px 100px;
	}
	@media (max-width: 768px) {
		padding: 0px 50px;
	}
	@media (max-width: 480px) {
		padding: 0px 25px;
	}
	padding: 0px 150px;
`;

const HeaderContainer = styled.div`
	max-width: 1600px;
`;

const MinorHeading = styled.h1`
	margin: 0px 0px 30px 4px;
	color: ${colors.accent};
	font-family: 'Roboto mono';
	font-size: clamp(14px, 5vw, 16px);
`;

const NameHeading = styled.h2`
	color: ${colors.lightestSlate};
	font-size: clamp(40px, 8vw, 80px);
	font-weight: 600;
`;

const Heading2 = styled.h2`
	color: ${colors.slate};
	font-size: clamp(30px, 7vw, 60px);
	font-weight: 600;
	margin-top: 10px;
	line-height: 0.9;
`;
