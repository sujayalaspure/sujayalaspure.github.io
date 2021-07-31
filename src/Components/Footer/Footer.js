import React from 'react';
import styled from 'styled-components';
import { socialLink } from '../../constant';
import { colors, theme } from '../../Styles';

export default function Footer() {
	return (
		<Container>
			<FooterSocial>
				<ul>
					{socialLink.map(({ Icon, link, name }) => (
						<SocialLink>
							<a href={link} target='_blank' rel='noreferrer'>
								<Icon />
							</a>
						</SocialLink>
					))}
				</ul>
			</FooterSocial>
			<FooterCredits>
				<a href='https://github.com/alaspuresujay' target='_blank' rel='noopener noreferrer'>
					Designed & Built by Sujay Alaspure
				</a>
			</FooterCredits>
		</Container>
	);
}

const Container = styled.footer`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	flex-direction: column;
	height: auto;
	min-height: 70px;
	padding: 15px;
	text-align: center;
`;

const FooterCredits = styled.div`
	color: var(--light-slate);
	font-family: var(--font-mono);
	font-size: var(--fz-xxs);
	line-height: 1;
	a {
		padding: 10px;
	}
`;

const FooterSocial = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: block;
		width: 100%;
		max-width: 220px;
		margin: 0px auto 10px;
		color: var(--light-slate);
	}

	ul {
		display: flex;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
		padding: 0px;
		margin: 0px;
		list-style: none;
	}
`;

const SocialLink = styled.li`
	display: list-item;
	text-align: -webkit-match-parent;
	/* padding: 10px; */
	/* cursor: pointer; */
	/* margin: 10px 0px; */
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
`;
