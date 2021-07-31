import React from 'react';
import styled from 'styled-components';

export default function Section({ children }) {
	return <Container>{children}</Container>;
}

const Container = styled.section`
	margin: 0px auto;

	/* padding: 100px 0px; */
	max-width: 1000px;

	/* @media (max-width: 1080px) {
		padding: 0px 100px;
	}
	@media (max-width: 768px) {
		padding: 80px 50px;
	}
	@media (max-width: 480px) {
		padding: 0px 25px;
	} */
`;
