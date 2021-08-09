import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import BannerImage from '../Projects/Smarthm/Assets/banner3.png';
import DesignSystem from '../Projects/Smarthm/Assets/designSystem.png';
import '../Components/Dust';
import { Parallax } from 'react-parallax';
import { FiArrowLeft, FiAlignRight } from 'react-icons/fi';
import { colors } from '../Styles';
import GridItem from '../Components/GridItem';
import { Data } from '../Projects/Smarthm/Data';

export default function CaseStudy() {
	return (
		<>
			<Header>
				<a href='#back'>
					<FiArrowLeft />
				</a>
				<a href='#home'>
					<FiAlignRight />
				</a>
			</Header>
			<Container className='container-fluid'>
				<HeadingContainer>
					<ProjectTitle>SmartHM</ProjectTitle>
					<ProjectSubTitle>Control All your home Devices from your fingertip</ProjectSubTitle>
				</HeadingContainer>
				<Parallax bgImage={BannerImage} strength={300} style={{ width: '100%' }}>
					<div style={{ height: '100vh', width: '100%' }}></div>
				</Parallax>
				<Brief>
					<BriefContainer>
						<BriefHeading>
							<h2>The Challange</h2>
						</BriefHeading>
						<BriefContent>
							<BriefText>
								<p>
									Redesigning a mobile app with a multi-million user base is always a big
									responsibility. Users sometimes react negatively to changes in interactions that
									have become familiar, which can bring down ratings. Our team worked with Sleepiest
									to audition dozens of design concepts until we found the perfect solution for
									improving the design while keeping users comfortable with familiar interactions.
								</p>
							</BriefText>
							<BriefLink>
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
							</BriefLink>
						</BriefContent>
					</BriefContainer>
				</Brief>

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
			</Container>
		</>
	);
}

const Container = styled.div`
	max-width: 100vw;
	/* width: 100vw; */
	padding-right: 0px;
	padding-left: 0px;
	margin-right: auto;
	margin-left: auto;

	/* display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column; */
	/* padding: 0 270px; */
`;

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

const Header = styled.div`
	display: flex;
	padding: 1rem 2rem;
	justify-content: space-between;
	align-items: center;

	a {
		cursor: pointer;
		&:hover .react-icons {
			transform: none;
		}
	}
`;

const HeadingContainer = styled.div`
	padding: 0 270px;
	margin: 200px 0px;
	@media (max-width: 1354px) {
		padding: 0 180px;
		margin: 160px 0px;
	}
	@media (max-width: 1024px) {
		padding: 0 120px;
		margin: 100px 0px;
	}
	@media (max-width: 768px) {
		padding: 0 100px;
		margin: 80px 0px;
	}
	@media (max-width: 480px) {
		padding: 0 30px;
	}
`;
const ProjectTitle = styled.h1`
	font-size: 20px;
	line-height: 250%;
	color: ${colors.lightestSlate};
	@media (min-width: 360px) {
		font-size: 20px;
		margin-bottom: 20px;
	}
	@media (min-width: 1200px) {
		font-size: 1.41667vw;
	}
`;

const ProjectSubTitle = styled.h2`
	font-weight: 200;
	color: ${colors.lightSlate};
	@media (min-width: 360px) {
		font-size: 34px;
	}
	@media (min-width: 1200px) {
		font-size: 3.41667vw;
	}
`;

const Brief = styled.section`
	color: ${colors.slate};
	width: 100%;
	padding: 350px 270px;

	@media (max-width: 1354px) {
		padding: 320px 180px;
	}
	@media (max-width: 1024px) {
		padding: 300px 120px;
	}
	@media (max-width: 768px) {
		padding: 300px 100px;
	}
	@media (max-width: 480px) {
		padding: 170px 30px;
	}
`;

const BriefContainer = styled.div`
	@media (min-width: 768px) {
		display: flex;
	}
`;

const BriefHeading = styled.div`
	/* min-width: 400px;
	max-width: 300px;
	padding: 0 0 30px 0; */
	padding-bottom: 30px;
	@media (min-width: 768px) {
		min-width: 190px;
		max-width: 190px;
		padding: 0 20px 30px 0;
	}
	@media (min-width: 1024px) {
		min-width: 300px;
		max-width: 300px;
		padding: 0 80px 30px 0;
	}
	@media (min-width: 1600px) {
		min-width: 400px;
		max-width: 300px;
	}

	h2 {
		color: ${colors.lightSlate};
		font-size: clamp(22px, 1.8vw, 40px);
	}
`;

const BriefContent = styled.div`
	max-width: 92%;
	font-size: clamp(20px, 24px, 28px);
	line-height: 150%;
`;

const BriefText = styled.div`
	font-size: clamp(20px, 24px, 28px);
	p {
		color: ${colors.slate};
	}
`;

const BriefLink = styled.div`
	@media (min-width: 768px) {
		margin: -10px -20px;
		padding: 20px 0 0 0;
	}
	@media (min-width: 1200px) {
		margin: -12px -32px;
	}

	margin: -10px -12px;
	padding: 32px 0 0 0;

	a {
		@media (min-width: 768px) {
			margin: 10px 20px;
			padding: 7px 0;
			font-size: 20px;
		}
		@media (min-width: 1200px) {
			margin: 12px 32px;
		}
		position: relative;
		display: inline-block;
		margin: 10px 15px;
		padding: 5px 0;
		font-size: 20px;
		/* font-weight: 400; */
		letter-spacing: -0.01em;
		vertical-align: middle;
		text-decoration: none;
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
