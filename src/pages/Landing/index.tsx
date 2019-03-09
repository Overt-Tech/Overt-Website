import React from 'react';
import { useSpring, animated } from 'react-spring';
import classnames from 'classnames';

import { Button, Hero, Section, SupportingText } from './components';
import links from './links';
import cls from './Landing.module.scss';
import logo from '../../assets/images/overtlogo.svg';

const Landing = () => {
	const [active, setActive] = React.useState(false);
	const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<>
			<Section backgroundColor='#FFFFFF'>
				<Hero>
					<div>
						<nav>
							<span
								className={cls.navbarToggle}
								onClick={() => setActive(!active)}
							/>
							<a href='/' className={cls.logo}>
								<img src={logo} alt='' style={{ zoom: 0.07 }} />
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
						style={styles.heroMain(springProps)}
					>
						<h1 style={{ fontSize: 40, fontWeight: 900 }}>
							The future is open-source.
						</h1>
						<br />
						<SupportingText>
							Overt creates open-source solutions to the world's pressing
							issues.
						</SupportingText>
						<br />
						<br />
						<a
							href='#about-us'
							style={{ textDecoration: 'none', width: '200px' }}
						>
							<Button>Learn More</Button>
						</a>
					</animated.div>
					<div />
				</Hero>
			</Section>
			<Section backgroundColor='#000000' id='about-us'>
				<div style={{ ...styles.aboutUs, ...{ flexDirection: 'column' } }}>
					<div>
						<h1
							style={{
								fontWeight: 900,
								color: '#FFFFFF',
								fontSize: 40,
								textAlign: 'center'
							}}
						>
							We are building the future.
						</h1>
					</div>
					<br />
					<div style={{ width: '75%', margin: 'auto' }}>
						<p style={styles.sectionParagraph}>
							Open-source software powers a large amount of the world's
							technology. From operating systems to self-driving car software,
							open-source code makes technology accessible to everyone.
						</p>
						<br />
						<p style={styles.sectionParagraph}>
							At Overt, we are building open-source software to solve problems
							we face everyday. We believe in collaboration of developers around
							the world to build the software that will shape tommorrow. We are
							building software for the the people, by the people.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
};

const styles = {
	sectionParagraph: {
		fontSize: 20,
		color: '#FFFFFF',
		lineHeight: 1.5
	},
	aboutUs: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: '100%',
		width: '100%',
		padding: '40px 0 40px 0',
		minHeight: '60vh'
	},
	heroMain: (springProps: any) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		...springProps
	})
};

export default Landing;
