import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiMonitor } from 'react-icons/fi';
import { project, TestImage } from '../../constant';
import { colors } from '../../Styles';

export default function FeaturedProject() {
	return (
		<Container>
			<ProjectContent>
				{/* ProjectOverline */}
				<ProjectOverline>Featured Project</ProjectOverline>
				{/* ProjectTitle */}
				<ProjectTitle>
					<a href={project.githubLink} target='_blank' rel='noreferrer'>
						OctoProfile
					</a>
				</ProjectTitle>
				{/* ProjectDescription */}
				<ProjectDescription>
					<p>{project.description}</p>
				</ProjectDescription>
				{/* ProjectTags */}
				<ProjectTags>
					{project.tags.map(tag => (
						<li>{tag}</li>
					))}
				</ProjectTags>
				{/* ProjectLinks */}
				<ProjectLinks>
					<a href={project.githubLink} target='_blank' rel='noreferrer'>
						<FiGithub />
					</a>
					<a href={project.ExternalLink} target='_blank' className='external' rel='noreferrer'>
						<FiExternalLink />
					</a>
					<a href={project.ExternalLink} target='_blank' className='demo' rel='noreferrer'>
						<FiMonitor />
					</a>
				</ProjectLinks>
			</ProjectContent>
			<ProjectImage>
				<a href='http://' target='_blank' rel='noopener noreferrer'>
					<img src={TestImage} alt='Some' />
				</a>
			</ProjectImage>
		</Container>
	);
}

const Container = styled.div`
	/* border: 1px solid red; */
	position: relative;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	margin-bottom: 100px;
	@media (max-width: 768px) {
		margin-bottom: 70px;
		justify-content: center;
		padding: 2rem 0;
	}
`;

const ProjectContent = styled.div`
	position: relative;
	width: 60%;
	@media (max-width: 768px) {
		width: 100%;
		padding: 2rem 2rem;

		/* background-color: ${colors.navy}aa; */
		z-index: 10;
	}
`;

const ProjectOverline = styled.p`
	margin: 10px 0px;
	color: ${colors.accent};
	font-family: var(--font-mono);
	font-size: var(--fz-xs);
	font-weight: 400;
`;

const ProjectTitle = styled.h3`
	color: ${colors.lightestSlate};
	font-size: clamp(24px, 5vw, 28px);
	&:hover {
		color: ${colors.accent};
	}
	a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		color: inherit;
		position: relative;
		transition: var(--transition);
	}
`;

const ProjectDescription = styled.div`
	box-shadow: 0 10px 30px -15px ${colors.navyshadow};
	transition: var(--transition);
	position: relative;
	z-index: 2;
	padding: 25px;
	border-radius: var(--border-radius);
	background-color: ${colors.lightnavy};
	color: ${colors.lightestSlate};
	font-size: var(--fz-lg);
	p {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		/* margin: 0 -1rem; */
		background-color: transparent;
		box-shadow: none;
		margin-top: 2rem;
		padding: 0px 0px;
	}
`;

const ProjectTags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	z-index: 2;
	margin: 25px 0px 10px;
	padding: 0px;
	list-style: none;
	li {
		margin: 0px 10px 0px 0px;
		color: ${colors.lightSlate};
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
		white-space: nowrap;
		/* background-color: ${colors.lightnavy}; */
		padding: 2px 8px;
		border-radius: 10px;
		&:first-of-type {
			padding-left: 0;
		}
	}
	@media (max-width: 768px) {
		margin-top: 1.2rem;
		/* background-color: ${colors.lightnavy}99; */
	}
`;

const ProjectLinks = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	margin-top: 10px;
	margin-left: -10px;
	color: ${colors.lightestSlate};
	a {
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		padding: 10px;
	}
	a.external {
		.react-icons {
			width: 22px;
			height: 22px;
			margin-top: -4px;
		}
	}
	a.demo {
		.react-icons {
			width: 22px;
			height: 22px;
		}
	}

	@media (max-width: 768px) {
		justify-content: flex-end;
	}
`;

const ProjectImage = styled.div`
	/* border: 2px solid yellow; */
	width: 60%;
	max-height: 340px;
	position: absolute;
	right: 0;
	box-shadow: 0 10px 30px -15px ${colors.navyshadow};
	transition: var(--transition);
	z-index: 1;
	overflow: hidden;
	object-fit: fill;
	a {
		img {
			width: 100%;
			height: auto;
			-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
			filter: grayscale(100%);
			transition: var(--transition);
			border-radius: var(--border-radius);
		}

		img[alt=''],
		img:not([alt]) {
			filter: blur(5px);
		}
	}
	&:hover img {
		-webkit-filter: none; /* Safari 6.0 - 9.0 */
		filter: none;
	}
	@media (max-width: 768px) {
		height: auto;
		width: 100%;
		max-height: 100%;
		top: 0;
		bottom: 0;
		a {
			background-color: ${colors.navy};
			height: 100%;
			width: 100%;
			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				inset: 0px;
				z-index: 3;
				transition: var(--transition);
				background-color: var(--navy);
				mix-blend-mode: screen;
			}
			img {
				object-fit: cover;
				width: auto;
				height: 100%;
				filter: grayscale(100%) contrast(1) brightness(20%);
			}
		}
	}
`;
