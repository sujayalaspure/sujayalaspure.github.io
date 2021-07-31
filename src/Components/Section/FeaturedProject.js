import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { project, TestImage } from '../../constant';
import { theme } from '../../Styles';

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
					<a href={project.PageLink} target='_blank' className='info' rel='noreferrer'>
						Read More
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
	border: 0px solid white;
	position: relative;
	display: flex;
	/* display: grid; */
	/* gap: 10px; */
	/* grid-template-columns: repeat(12, 1fr); */
	-webkit-box-align: center;
	align-items: center;
	margin-bottom: 100px;
`;

const ProjectContent = styled.div`
	border: 0px solid cyan;

	position: relative;
	/* grid-area: 1 / 1 / -1 / 7; */
	width: 60%;
	/* background: blue; */
`;

const ProjectOverline = styled.p`
	margin: 10px 0px;
	color: var(--green);
	font-family: var(--font-mono);
	font-size: var(--fz-xs);
	font-weight: 400;
`;

const ProjectTitle = styled.h3`
	color: var(--lightest-slate);
	font-size: clamp(24px, 5vw, 28px);
	&:hover {
		color: var(--green);
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
	box-shadow: 0 10px 30px -15px var(--navy-shadow);
	transition: var(--transition);
	position: relative;
	z-index: 2;
	padding: 25px;
	border-radius: var(--border-radius);
	background-color: var(--light-navy);
	color: var(--light-slate);
	font-size: var(--fz-lg);
	p {
		margin-bottom: 0;
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
		margin: 0px 10px 5px 0px;
		color: var(--light-slate);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
		white-space: nowrap;
		background-color: var(--light-navy);
		padding: 2px 10px;
		border-radius: 10px;
	}
`;

const ProjectLinks = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	position: relative;
	margin-top: 10px;
	margin-left: -10px;
	color: var(--lightest-slate);
	a {
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		padding: 10px;
		.react-icons {
			transition: ${theme.transition};
			width: 20px;
			height: 20px;
			color: var(--lightest-slate);
		}
		&:hover .react-icons {
			color: var(--green);
			transform: translateY(-3px);
		}
	}
	a.external {
		.react-icons {
			width: 22px;
			height: 22px;
			margin-top: -4px;
		}
	}
	a.info {
		transition: ${theme.transition};

		margin: 0px 20px 0px 20px;
		color: var(--light-slate);
		font-family: var(--font-mono);
		font-size: var(--fz-xs);
		white-space: nowrap;
		background-color: var(--light-navy);
		text-decoration: none;
		&:hover {
			color: var(--green);
		}
	}
`;

const ProjectImage = styled.div`
	/* border: 1px solid yellow; */
	box-shadow: 0 10px 30px -15px var(--navy-shadow);
	transition: var(--transition);
	position: relative;
	z-index: 1;
	width: 50%;

	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	a {
		width: 100%;
		height: 100%;
		background-color: var(--green);
		border-radius: var(--border-radius);
		vertical-align: middle;

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
			/* opacity: 0; */
			transition: opacity 500ms linear 0s;
			object-fit: cover;
			border-radius: var(--border-radius);
			mix-blend-mode: multiply;
			filter: grayscale(100%) contrast(1) brightness(90%);
			width: 100%;
			max-width: 100%;
			vertical-align: middle;
			height: 100%;
			padding: 0;
			margin: 0;
			max-width: none;
		}

		img[alt=''],
		img:not([alt]) {
			filter: blur(5px);
		}
	}
`;
