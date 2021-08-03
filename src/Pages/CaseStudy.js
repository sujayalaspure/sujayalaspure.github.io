import React from 'react';
import styled from 'styled-components';
import BannerImage from '../Projects/Smarthm/Assets/banner.png';
import img1 from '../Projects/Smarthm/Assets/img1.png';
import { ParallaxBanner } from 'react-scroll-parallax';
import { TestImage } from '../constant';
import '../Components/Dust';
import { Parallax, Background } from 'react-parallax';

const insideStyles = {
	background: 'white',
	padding: 20,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
};
export default function CaseStudy() {
	return (
		<Container className='container-fluid'>
			<h1>Home Automation</h1>

			<Parallax bgImage={BannerImage} strength={200} style={{ width: '100vw' }}>
				<div style={{ height: 500, width: '100%' }}>
					<div style={{ padding: 20, border: '1px solid red' }}>HTML inside the parallax</div>
				</div>
			</Parallax>

			<div className='row mt-5'>
				<div className='col'>
					<Parallax bgImage={img1} strength={-200} style={{ width: '40vw' }}>
						<div style={{ height: 800 }}></div>
					</Parallax>
				</div>
				<div className='col'>
					<Parallax bgImage={img1} strength={-200} style={{ width: '40vw' }}>
						<Background className='custom-bg'>
							<img src='http://www.fillmurray.com/500/320' alt='fill murray' />
						</Background>
					</Parallax>
				</div>
			</div>

			<p style={{ fontSize: 50 }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam tempore expedita
				reprehenderit earum harum cupiditate similique minima ab aliquam, ex suscipit enim beatae
				eveniet maiores optio eius libero ipsa. Lorem, ipsum dolor sit amet consectetur adipisicing
				elit. Veniam vel ducimus sint atque optio, libero saepe consectetur. Magni explicabo,
				voluptates ab, aspernatur incidunt quisquam assumenda porro, autem qui a commodi? Fuga
				voluptatem magni quidem temporibus ipsa animi est velit, debitis laboriosam quis, voluptates
				nisi, accusamus aliquid quos! Explicabo, cum quod! Inventore fugiat possimus voluptas fuga
				perferendis exercitationem accusamus illum aliquam. Laborum, quidem! Fuga voluptates
				obcaecati velit blanditiis sed quibusdam unde perspiciatis, expedita officia corrupti sunt
				ratione aliquid eius, provident harum ipsam quaerat pariatur. Optio architecto atque
				temporibus eaque, corrupti ab! Est hic, voluptates alias beatae doloremque quibusdam!
				Quaerat, dolore quam. Eius error dolorum earum non fugiat ducimus voluptate nesciunt minus
				ut, veniam, nemo nulla rem. Vero cum cumque tempora eius. Reprehenderit delectus accusantium
				autem vel aliquid reiciendis alias, ipsum inventore earum impedit minima debitis, incidunt
				facere? Numquam nisi repellendus ea, praesentium nam ratione cupiditate iusto dolores
				consequatur? Voluptatem, eos ipsa.
			</p>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const BannerImageWrapper = styled.img`
	/* height: auto; */
	width: 100%;
	border: 1px solid cyan;
`;
