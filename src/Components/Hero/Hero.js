import React from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import './Hero.css';
export default function Hero() {
	return (
		<div className='hero'>
			<LeftSideBar />
			<RightSideBar />
			<div className='HeaderContainer'>
				<h3 className='MinorHeading'>Hello World, my name is</h3>
				<h1 className='NameHeading'>Sujay Alaspure</h1>
				<h2 className='bio'>I build things for the web/mobile.</h2>
			</div>
		</div>
	);
}
