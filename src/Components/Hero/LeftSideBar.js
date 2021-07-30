import React from 'react';
import styled from 'styled-components';
import { socialLink } from '../../constant';
import { colors, theme } from '../../Styles';

export default function LeftSideBar() {
	return (
		<LeftSideBarWrapper>
			<ul className='social_styled_link'>
				{socialLink.map(({ link, Icon }) => (
					<SocialLink>
						<a href={link} target='_blank' rel='noreferrer'>
							<Icon />
						</a>
					</SocialLink>
				))}
			</ul>
		</LeftSideBarWrapper>
	);
}

const LeftSideBarWrapper = styled.div`
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
	padding: 10px;
	cursor: pointer;
	margin: 10px 0px;
	.react-icons {
		transition: ${theme.transition};
		height: 20px;
		width: 20px;
		color: ${colors.lightSlate};
	}
	&:hover .react-icons {
		color: ${colors.accent};
		transform: translateY(-3px);
	}
	:last-of-type {
		margin-bottom: 40px;
	}
`;
