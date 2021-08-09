import React from 'react';
import styled from 'styled-components';
import { colors, theme } from '../Styles';

export default function GridItem({ img, caption = null }) {
	return (
		<Container>
			<Image src={img} alt='' />
			{caption && (
				<Caption>
					<p>{caption}</p>
				</Caption>
			)}
		</Container>
	);
}

const Container = styled.div`
	padding: ${theme.spacing[10]} 20px;
	overflow: hidden;

	@media (max-width: 768px) {
		padding: 30px 0;
	} ;
`;

const Image = styled.img`
	border-radius: 10px;
	object-fit: cover;
	max-height: 150vh;
	width: 100%;
	height: auto;
`;

const Caption = styled.div`
	margin-top: ${theme.spacing[20]};
	width: 100%;
	text-align: center;
	p {
		font-size: ${theme.fz['xl']};
		color: ${colors.lightSlate};
	}
`;
