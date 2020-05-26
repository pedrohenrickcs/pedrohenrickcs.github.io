import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub, faLinkedin, faCodepen
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home = () => (
	<Layout>
		<SEO 
		description="Front-end developer, developing web pages" 
		keywords="React, Gatsby, Front-end, developer, API"
		/>
		<figure className="image photo is-128x128">
			<StaticQuery 
			query={graphql`
				query {
					file(relativePath: { eq: "photo.jpg" }) {
						childImageSharp {
							fixed(width: 128, height: 128) {
							...GatsbyImageSharpFixed
							}
						}
					}
				}
			`}
			render={data => (
				<Img
					fixed={data.file.childImageSharp.fixed}
					imgStyle={{ borderRadius: '100%' }}
					alt="Pedro henrick"
				/>
			)}
		/>
		</figure>
		<h1 className="title has-text-centered has-text-light">Pedro Henrick Cavalcante Souza</h1>
		<h2 className="subtitle has-text-centered has-text-warning">Web Developer</h2>
		<div className="has-text-centered">
			<a href="https://github.com/pedrohenrickcs" rel="noopener" target="_blank" aria-label="Github">
				<span className="icon is-large fa-2x">
					<FontAwesomeIcon icon={faGithub}/>
				</span>
			</a>
			<a href="https://www.linkedin.com/in/pedro-henrickcs/" rel="noreferrer" target="_blank" aria-label="Linkedin">
				<span className="icon is-large fa-2x">
					<FontAwesomeIcon icon={faLinkedin}/>
				</span>
			</a>
			<a href="https://codepen.io/pedrohenrickcs/" rel="noreferrer" target="_blank" aria-label="Codepen">
				<span className="icon is-large fa-2x">
					<FontAwesomeIcon icon={faCodepen}/>
				</span>
			</a>
		</div>

		<section className="section content is-size-5-desktop is-size-6-touch">
			<h4 className="has-text-light">
				Hi, I'm Pedro
				{' '}
				<span role="img" aria-label="face">😀</span>
			</h4>
			<p>
			{`I have 6 years of experience as a front end, being about 3 years working with Vtex. 
			Possibility of ease of working in groups always the best for the work environment and also for the end customer besides the competence of me to commit to what is always seeking the best possible result.`}
			</p>
			{/* <p>
			Check out my
			{' '}
			<Link to="/projects">projects</Link>
			.
			</p> */}
		</section>
	</Layout>
);

Home.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
};

export default Home;
