import React from 'react';
import Head from 'next/head';
import { useSpring, animated, config } from 'react-spring';
import classnames from 'classnames';
import { IoLogoGithub, IoLogoTwitter, IoIosMenu } from 'react-icons/io';

import {
	Button,
	Hero,
	Section,
	SupportingText,
	Footer
} from '../components/elements';
import Project from '../components/Project';
import links from '../components/links';
import cls from '../styles/Landing.module.css';
import styles from '../components/styles';

const Landing = () => {
	const [active, setActive] = React.useState(false);
	const springProps = useSpring({
		from: { opacity: 0, transform: 'translate3d(0,100px,0)', color: '#D3D3D3' },
		to: { opacity: 1, transform: 'translate3d(0,0,0)', color: '#000000' },
		config: config.molasses
	});
	return (
		<>
			<Head>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=UA-136875969-1'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag('js', new Date());
							gtag('config', 'UA-136875969-1');
						`
					}}
				/>
				<meta charSet='utf-8' />
				<link rel='shortcut icon' href='/static/favicon.ico' />
				<link rel='canonical' href='https://overt.dev/' />
				<link
					href='https://fonts.googleapis.com/css?family=Karla:400,700'
					rel='stylesheet'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				<meta name='theme-color' content='#000000' />
				<meta name='robots' content='index, follow' />
				<meta charSet='utf-8' />

				<meta name='description' content='The future is open-source.' />
				<meta name='image' content='https://overt.dev/logo.png' />

				<meta itemProp='name' content='Overt' />
				<meta itemProp='description' content='The future is open-source.' />
				<meta itemProp='image' content='https://overt.dev/logo.png' />

				<meta name='twitter:card' content='summary' />
				<meta name='twitter:title' content='Overt' />
				<meta name='twitter:description' content='The future is open-source.' />
				<meta name='twitter:site' content='@overt_hq' />

				<meta name='og:title' content='Overt' />
				<meta name='og:description' content='The future is open-source.' />
				<meta name='og:image' content='https://overt.dev/logo.png' />
				<meta name='og:url' content='https://overt.dev' />
				<meta name='og:site_name' content='Overt' />
				<meta name='og:type' content='website' />

				{/* <link rel='manifest' href='%PUBLIC_URL%/manifest.json' /> */}

				<title>Overt</title>
			</Head>
			<Section backgroundColor='#FFFFFF'>
				<Hero>
					<div>
						<nav>
							<span
								className={cls.navbarToggle}
								onClick={() => setActive(!active)}
							>
								<IoIosMenu color='#000000' size={30} />
							</span>
							<a href='/' className={cls.logo}>
								<img
									src='/static/images/overtlogo.svg'
									alt=''
									style={{ width: 100, height: 'auto' }}
								/>
							</a>
							<ul
								className={classnames(cls.mainNav, {
									[cls.active]: active
								})}
								id='js-menu'
							>
								{links.map((link, index: number) => (
									<li key={index}>
										<a href={link.url} className={cls.navLinks}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<animated.div
						className={cls.hero}
						style={{ ...styles.heroMain, ...springProps }}
					>
						<div>
							<h1 style={{ fontSize: 40, fontWeight: 700 }}>
								The future is open-source.
							</h1>
							<br />
							<SupportingText>
								We create open-source solutions to the world's pressing issues.
							</SupportingText>
							<Button href='#about-us' role='button'>
								Learn More
							</Button>
						</div>
						<div className={cls.imageHolder}>
							<img
								src='/static/heroimage.svg'
								alt='Building the future'
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
					</animated.div>
				</Hero>
			</Section>
			<Section backgroundColor='#000000' id='about-us'>
				<div style={{ ...styles.aboutUs, ...{ flexDirection: 'column' } }}>
					<div>
						<h2 style={{ ...styles.sectionHeader, ...{ textAlign: 'center' } }}>
							We are building the future.
						</h2>
					</div>
					<br />
					<div style={{ width: '75%', margin: 'auto' }}>
						<p style={styles.sectionParagraph}>
							Open-source software powers a large amount of the world's
							technology. From operating systems to self-driving car software,
							open-source code makes technology accessible to everyone.
						</p>
						<p style={styles.sectionParagraph}>
							Proprietary software stands in the way of the collaboration and
							innovation that is undoubtedly required to solve humanity's
							problems. We believe that the solving these problems is not a task
							that can be done by a company.
						</p>
						<p style={styles.sectionParagraph}>
							At Overt, we are building open-source software to solve problems
							we face everyday. We believe in the collaboration of developers
							around the globe, to build the software that will shape tomorrow.
							We are building software for the the people, by the people.
						</p>
					</div>
				</div>
			</Section>
			<Section backgroundColor='#FFFFFF' id='projects'>
				<div style={{ ...styles.aboutUs, ...{ flexDirection: 'column' } }}>
					<div>
						<h1
							style={{
								...styles.sectionHeader,
								...{ color: '#000000', textAlign: 'center' }
							}}
						>
							Our Projects
						</h1>
					</div>
					<br />
					<div style={{ width: '85%', margin: 'auto' }}>
						<Project
							name='Auxilium'
							logo='/static/images/auxiliumLogo.png'
							link='https://github.com/overthq/Auxilium'
							description='Emergency reporting app'
							themeColor='#FF8282'
						/>
					</div>
				</div>
			</Section>
			<Section backgroundColor='#000000' id='join-us'>
				<div style={{ ...styles.aboutUs, ...{ flexDirection: 'column' } }}>
					<div>
						<h2 style={{ ...styles.sectionHeader, ...{ textAlign: 'center' } }}>
							Join Us
						</h2>
					</div>
					<br />
					<div style={{ width: '75%', margin: 'auto' }}>
						<p style={styles.sectionParagraph}>
							To build the future, we need your help. By making all our source
							code open-source, we urge you to be amongst those who will join us
							in building the future.
						</p>
						<p style={styles.sectionParagraph}>
							To re-assure you of our intentions, all our code is either MIT or
							GNU GPLv3-Licensed. We also promise to not sell your intellectual
							property, or become closed-source at any point.
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
								marginTop: 50
							}}
						>
							<div>
								<Button
									style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
									href='https://join.slack.com/t/overt-hq/shared_invite/enQtNjg4ODQ0NzIwNjc5LTc4MDA3ZDMyNmE2MTc3ZTA1NThlNmZkMDgyYTIxNzNlMGI0N2IzYWY2OWYyNGQzMzdhYWQ0OTAyMmQxYjM2MjA'
									target='_blank'
									rel='noopener noreferrer'
								>
									Join Us on Slack
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Section>
			<Footer>
				<div>
					<img
						src='/static/images/overtlogo.svg'
						alt=''
						style={{ width: 90, height: 'auto', filter: 'invert(1)' }}
					/>
				</div>
				<div>
					<a
						href='https://www.producthunt.com/posts/overt-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-overt-2'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=149087&theme=light'
							alt='Overt - Building the future in the open | Product Hunt Embed'
							style={{ width: '250px', height: '54px' }}
							width='250px'
							height='54px'
						/>
					</a>
				</div>
				<div style={styles.iconsContainer}>
					<a href='https://github.com/overthq' className={cls.socialIcon}>
						<IoLogoGithub size={30} />
					</a>
					<a href='https://twitter.com/overt_hq' className={cls.socialIcon}>
						<IoLogoTwitter size={30} />
					</a>
				</div>
			</Footer>
		</>
	);
};

export default Landing;
