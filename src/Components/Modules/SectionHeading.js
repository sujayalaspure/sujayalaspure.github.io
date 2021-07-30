import React from 'react';
import styled from 'styled-components';
import { colors, theme } from '../../Styles';

export default function SectionHeading({ number, title }) {
	return (
		<Container>
			<HeadingNumber>{number}.</HeadingNumber>
			<HeadingTitle>{title}</HeadingTitle>
		</Container>
	);
}

const Container = styled.div`
	width: ${theme.width.full};
	color: ${colors.slate};
	display: flex;
	-webkit-box-align: center;
	align-items: center;
`;

const HeadingNumber = styled.h2`
	/* position: relative; */
	/* bottom: 4px; */
	/* margin-right: 10px; */
	color: var(--green);
	font-family: var(--font-mono);
	font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
	font-weight: 400;
`;

const HeadingTitle = styled.h2`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	/* margin: 10px 0px 40px; */
	/* width: 100%; */
	font-size: clamp(26px, 5vw, 32px);
	white-space: nowrap;
	&:after {
		content: '';
		display: block;
		position: relative;
		top: -5px;
		width: 300px;
		height: 1px;
		margin-left: 20px;
		background-color: ${colors.lightestnavy};

		@media (max-width: 1080px) {
			width: 200px;
		}
		@media (max-width: 768px) {
			width: 100%;
		}
		@media (max-width: 600px) {
			margin-left: 10px;
		}
	}
`;
