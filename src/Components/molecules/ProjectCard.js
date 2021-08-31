import projects from 'container/Projects/Projects';
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import 'styles/components/ProjectCard.css';
export default function ProjectCard() {
	return (
		<div className='inner-card'>
			<div className='header'>
				<div className='links'>
					{projects[1].githubLink && (
						<a href={projects[1].githubLink} target='_blank' rel='noreferrer'>
							<FiGithub />
						</a>
					)}
					<a href={`#/case/${projects[1].slug}`} className='external' rel='noreferrer'>
						<FiExternalLink />
					</a>
				</div>
				<h3 className='project-title'>
					<a href={`#/case/${projects[1].slug}`}>{projects[1].title}</a>
				</h3>
				<div className='project-description'>
					<p>{projects[1].description}</p>
				</div>
			</div>
			<ul className='project-tech-list'>
				{projects[1].tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</div>
	);
}
