import React from 'react';
import styled from 'styled-components';
import BannerImage from '../Projects/Smarthm/Assets/banner3.png';
import img1 from '../Projects/Smarthm/Assets/img1.png';
import { TestImage } from '../constant';
import '../Components/Dust';
import { Parallax, Background } from 'react-parallax';
import { FiArrowLeft, FiAlignRight } from 'react-icons/fi';
import { colors, theme } from '../Styles';

export default function CaseStudy() {
	return (
		<>
			<Header>
				<a onClick={() => console.log('[CaseStudy.js:14] -  ')}>
					<FiArrowLeft />
				</a>
				<a href=''>
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
								<a
									className='underline--magical'
									href='http://'
									target='_blank'
									rel='noopener noreferrer'>
									App Store
								</a>
							</BriefLink>
						</BriefContent>
					</BriefContainer>
				</Brief>

				{/* <div className='row mt-5'>
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
				</p> */}
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
