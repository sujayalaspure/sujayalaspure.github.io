import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { project, TestImage } from '../../constant';
import './FeaturedProject.css';
export default function FeaturedProject() {
	return (
		<div className='featured-project'>
			<div className='content'>
				<p className='overline'>Featured Project</p>
				<h3 className='title'>
					<a href={project.githubLink} target='_blank' rel='noreferrer'>
						OctoProfile
					</a>
				</h3>
				<div className='description'>
					<p>{project.description}</p>
				</div>
				<ul className='tags'>
					{project.tags.map(tag => (
						<li>{tag}</li>
					))}
				</ul>
				<div className='links'>
					<a href={project.githubLink} target='_blank' rel='noreferrer'>
						<FiGithub />
					</a>
					<a href={project.ExternalLink} target='_blank' className='external' rel='noreferrer'>
						<FiExternalLink />
					</a>
					{/* <a href={project.ExternalLink} target='_blank' className='demo' rel='noreferrer'>
						<FiMonitor />
					</a> */}
				</div>
			</div>
			<div className='thumbnail'>
				<a href='http://' target='_blank' rel='noopener noreferrer'>
					<img src={TestImage} alt='Some' />
				</a>
			</div>
		</div>
	);
}
