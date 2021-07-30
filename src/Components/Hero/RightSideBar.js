import React from 'react';
import styled from 'styled-components';
import { colors, theme } from '../../Styles';

export default function RightSideBar() {
	return (
		<Container>
			<EmailDiv>
				<a href='mailto:alaspuresujay@gmail.com'>alaspuresujay@gmail.com</a>
			</EmailDiv>
		</Container>
	);
}

const Container = styled.div`
	width: 40px;
	position: fixed;
	bottom: 0px;
	left: auto;
	right: 40px;
	z-index: 10;
	color: ${colors.lightSlate};
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1080px) {
		right: 20px;
		left: auto;
	}
	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: #a8b2d1;
	}
`;

const EmailDiv = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	transition: ${theme.transition};
	position: relative;
	a {
		transition: ${theme.transition};
		margin: 20px auto;
		padding: 10px;
		font-family: 'Roboto mono';
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 0.1em;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		position: relative;
		transition: var(--transition);
	}

	&:hover {
		color: ${colors.accent};
		transform: translateY(-3px);
	}
`;
