import React from 'react';
import styled from 'styled-components';
import { theme } from '../Styles';

function Navbar() {
	return <Container>Navbar</Container>;
}

export default Navbar;

const Container = styled.div`
	width: ${theme.width.full};
`;
