import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './FeaturedProject.css';
export default function FeaturedProject(props) {
	const { title, slug, description, tags, githubLink, image } = props;
	return (
		<div className='featured-project'>
			<div className='content'>
				<p className='overline'>Featured Project</p>
				<h3 className='title'>
					{/* <Link to='/case'>OctoProfile</Link> */}
					<a href={`#/case/${slug}`} rel='noreferrer'>
						{title}
					</a>
				</h3>
				<div className='description'>
					<p>{description}</p>
				</div>
				<ul className='tags'>
					{tags.map(tag => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
				<div className='links'>
					{githubLink && (
						<a href={githubLink} target='_blank' rel='noreferrer'>
							<FiGithub />
						</a>
					)}
					<a href={`#/case/${slug}`} className='external' rel='noreferrer'>
						<FiExternalLink />
					</a>
					{/* <a href={project.ExternalLink} target='_blank' className='demo' rel='noreferrer'>
						<FiMonitor />
					</a> */}
				</div>
			</div>
			<div className='thumbnail'>
				<a href={`#/case/${slug}`} rel='noopener noreferrer'>
					<img src={image} alt={title} />
				</a>
			</div>
		</div>
	);
}
