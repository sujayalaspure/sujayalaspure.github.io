import React from 'react';
import 'styles/components/Section.css';
import SectionHeading from './SectionHeading';
export default function Section({ children }) {
	return <section className='section'>{children}</section>;
}

export { SectionHeading };
