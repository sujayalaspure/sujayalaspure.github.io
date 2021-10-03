import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import 'styles/components/ProjectCard.css';
export default function ProjectCard({ project }) {
	return (
		<div className='inner-card'>
			<div className='header'>
				<div className='links'>
					{project.githubLink && (
						<a href={project.githubLink} target='_blank' rel='noreferrer'>
							<FiGithub />
						</a>
					)}
					<a
						href={project.externalLink ? project.externalLink : `#/case/${project.slug}`}
						className='external'
						target={project.externalLink && '_blank'}
						rel='noreferrer'>
						<FiExternalLink />
					</a>
				</div>
				<h3 className='project-title'>
					<a href={project.externalLink ? project.externalLink : `#/case/${project.slug}`}>
						{project.title}
					</a>
				</h3>
				<div className='project-description'>
					<p>{project.description}</p>
				</div>
			</div>
			<ul className='project-tech-list'>
				{project.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		</div>
	);
}
