import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BannerImage from 'Projects/Smarthm/Assets/banner3.png';
import DesignSystem from 'Projects/Smarthm/Assets/designSystem.png';
import 'Components/Dust';
import { Parallax } from 'react-parallax';
import { FiArrowLeft, FiAlignRight, FiChevronDown } from 'react-icons/fi';
import { colors } from 'Styles';
import GridItem from 'Components/GridItem';
import { Data } from 'Projects/Smarthm/Data';
import './CaseStudy.css';
export default function CaseStudy() {
	const { slug } = useParams();
	console.log('[CaseStudy.js:16] -  ', slug);
	return (
		<>
			{/* <div className='page-header>
				<a href='#back'>
					<FiArrowLeft />
				</a>
				<a href='#home'>
					<FiAlignRight />
				</a>
			</div> */}
			<div className='casestudy container-fluid'>
				<Parallax bgImage={BannerImage} strength={300}>
					<div style={{ height: '100vh', width: '100%', position: 'relative' }}>
						<div className='scroll-down'>
							<p>Scroll Down </p>
							<FiChevronDown />
						</div>
					</div>
				</Parallax>
				<div className='tophead-container'>
					<h1 className='project-title'>SmartHM</h1>
					<h2 className='project-subtitle'>Control All your home Devices from your fingertip</h2>
				</div>
				<section className='brief'>
					<div className='heading'>
						<h2>The Challange</h2>
					</div>
					<div className='content'>
						<div className='text'>
							<p>
								Redesigning a mobile app with a multi-million user base is always a big
								responsibility. Users sometimes react negatively to changes in interactions that
								have become familiar, which can bring down ratings. Our team worked with Sleepiest
								to audition dozens of design concepts until we found the perfect solution for
								improving the design while keeping users comfortable with familiar interactions.
							</p>
						</div>
						<div className='links'>
							<a
								className='underline--magical'
								href='http://'
								target='_blank'
								rel='noopener noreferrer'>
								Play Store
							</a>
							{/* <a
									className='underline--magical'
									href='http://'
									target='_blank'
									rel='noopener noreferrer'>
									App Store
								</a> */}
						</div>
					</div>
				</section>

				<Parallax bgImage={DesignSystem} strength={100}>
					<div style={{ height: '100vh' }}></div>
				</Parallax>
				<GridContainer>
					<Row xs={1} md={2}>
						<Col>
							<LeftCol>
								<GridItem
									img={Data[2].img}
									caption='Our first task was to give SmartHM a logotype and corporate identity.'
								/>
								<GridItem img={Data[3].img} />
							</LeftCol>
						</Col>
						<Col>
							<RightCol>
								<GridItem img={Data[4].img} />
								<GridItem img={Data[0].img} />
							</RightCol>
						</Col>
					</Row>
				</GridContainer>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam tempore expedita
					reprehenderit earum harum cupiditate similique minima ab aliquam, ex suscipit enim beatae
					eveniet maiores optio eius libero ipsa. Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Veniam vel ducimus sint atque optio, libero saepe consectetur. Magni
					explicabo, voluptates ab, aspernatur incidunt quisquam assumenda porro, autem qui a
					commodi? Fuga voluptatem magni quidem temporibus ipsa animi est velit, debitis laboriosam
					quis, voluptates nisi, accusamus aliquid quos! Explicabo, cum quod! Inventore fugiat
					possimus voluptas fuga perferendis exercitationem accusamus illum aliquam. Laborum,
					quidem! Fuga voluptates obcaecati velit blanditiis sed quibusdam unde perspiciatis,
					expedita officia corrupti sunt ratione aliquid eius, provident harum ipsam quaerat
					pariatur. Optio architecto atque temporibus eaque, corrupti ab! Est hic, voluptates alias
					beatae doloremque quibusdam! Quaerat, dolore quam. Eius error dolorum earum non fugiat
					ducimus voluptate nesciunt minus ut, veniam, nemo nulla rem. Vero cum cumque tempora eius.
					Reprehenderit delectus accusantium autem vel aliquid reiciendis alias, ipsum inventore
					earum impedit minima debitis, incidunt facere? Numquam nisi repellendus ea, praesentium
					nam ratione cupiditate iusto dolores consequatur? Voluptatem, eos ipsa.
				</p>
			</div>
		</>
	);
}

const GridContainer = styled.div`
	max-width: 100vw;
	/* display: flex; */
	/* padding: 0 270px;
	margin: 200px 0px; */
	@media (min-width: 480px) {
		padding: 200px 15px;
	}
	@media (min-width: 768px) {
		padding: 300px 100px;
		margin: 80px 0px;
	}
	@media (min-width: 1024px) {
		padding: 250px 120px;
		margin: 100px 0px;
	}
	@media (min-width: 1354px) {
		padding: 300px 180px;
		margin: 160px 0px;
	}
	@media (min-width: 1600px) {
		padding: 350px 220px;
		margin: 160px 0px;
	}
`;

const RightCol = styled.div`
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-moz-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
	@media (min-width: 1900px) {
		margin: 250px 0 0 0;
	}
	@media (min-width: 1200px) {
		margin: 193px 0 0 0;
	}

	@media (min-width: 1024px) {
		margin: 170px 0 0 0;
	}
	@media (min-width: 768px) {
		margin: 122px 0 0 0;
	}
`;

const LeftCol = styled.div`
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-moz-box-flex: 1;
	-ms-flex: 1;
	flex: 1;
`;
