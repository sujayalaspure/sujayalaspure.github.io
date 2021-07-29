import React from 'react';
import styled from 'styled-components';
import './Home.css';
import { colors, theme } from '../Styles';
import { socialLink } from '../constant';

function Home() {
	return (
		<Container>
			<LeftSideBar>
				<ul className='social_styled_link'>
					{socialLink.map(({ link, Icon }) => (
						<SocialLink>
							<a href={link} target='_blank' rel='noreferrer'>
								<Icon />
							</a>
						</SocialLink>
					))}
				</ul>
			</LeftSideBar>
			<HeaderContainer>
				<MinorHeading>Hi, my name is</MinorHeading>
				<NameHeading>Sujay Alaspure</NameHeading>
				<Heading2>I build things for the web.</Heading2>
			</HeaderContainer>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	background: ${colors.navy};
	width: ${theme.width.screen};
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

const LeftSideBar = styled.div`
	width: 40px;
	position: fixed;
	bottom: 0px;
	left: 40px;
	right: auto;
	z-index: 10;
	color: ${colors.lightSlate};
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1080px) {
		left: 20px;
		right: auto;
	}
`;

const SocialLink = styled.li`
	display: inline-block;
	text-decoration: none;
	text-decoration-skip-ink: auto;
	position: relative;
	transition: ${theme.transition};
	padding: 10px;
	cursor: pointer;
	margin: 5px 0px;
	.react-icons {
		height: 20px;
		width: 20px;
		color: ${colors.lightSlate};
	}
	&:hover .react-icons {
		color: ${colors.accent};
	}
	:last-of-type {
		margin-bottom: 20px;
	}
`;

const HeaderContainer = styled.div`
	max-width: 2000px;
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
	font-size: clamp(30px, 7vw, 80px);
	font-weight: 600;
	margin-top: 10px;
	line-height: 0.9;
`;
