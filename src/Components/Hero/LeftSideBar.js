import React from 'react';
import styled from 'styled-components';
import { socialLink } from '../../constant';
import { colors, theme } from '../../Styles';

export default function LeftSideBar() {
	return (
		<LeftSideBarWrapper>
			<SocialLinkListWrapper>
				{socialLink.map(({ link, Icon }) => (
					<SocialLink>
						<a href={link} target='_blank' rel='noreferrer'>
							<Icon />
						</a>
					</SocialLink>
				))}
			</SocialLinkListWrapper>
		</LeftSideBarWrapper>
	);
}

const LeftSideBarWrapper = styled.div`
	width: 40px;
	position: fixed;
	top: auto;
	bottom: auto;
	left: 40px;
	right: auto;
	z-index: 10;
	color: ${colors.slate};
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1080px) {
		left: 20px;
		right: auto;
	}
`;

const SocialLinkListWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	margin: 0px;
	padding: 0px;
	&:before,
	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: ${colors.slate}99;
	}
`;

const SocialLink = styled.li`
	display: inline-block;
	text-decoration: none;
	text-decoration-skip-ink: auto;
	position: relative;
	padding: 10px;
	cursor: pointer;
	margin: 5px 0px;
	/* .react-icons {
		transition: ${theme.transition};
		height: 20px;
		width: 20px;
		color: ${colors.slate}99;
	}
	&:hover .react-icons {
		color: ${colors.accent};
		transform: translateY(-3px);
	} */
	:last-of-type {
		/* margin-bottom: 40px; */
	}
`;
