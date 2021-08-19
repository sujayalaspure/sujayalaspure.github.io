import Section, { SectionHeading } from 'Components/molecules/Section';
import { profile } from 'constant';
import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
	return (
		<div className='about-me'>
			<SectionHeading number='01' title='About Me' />

			<div className='inner'>
				<div className='about-bio'>
					<p>
						Hello! My name is Sujay and I enjoy creating things that live on the internet. I believe
						that, There is no secret to success, It is the result of preparation, Hard work, and
						learnign from the failure... I love Exploring the new things, knowledge, Technologies,
						Ideas, New Places and much more.
					</p>
					<p>
						Fast-forward to today, and I've had the privilege of working at an institute, a start-up
						and a huge corporation (TCS).
					</p>
					<p>Here are a few technologies I've been working with recently:</p>
					<ul className='skills-list'>
						<li>React Js</li>
						<li>React Native</li>
						<li>Javascript (ES6)</li>
						<li>Express</li>
						<li>Firebase</li>
					</ul>
				</div>
				<div className='image'>
					<div className='wrapper'>
						<img src={profile} alt='' />
					</div>
				</div>
			</div>
			<Section></Section>
		</div>
	);
}
