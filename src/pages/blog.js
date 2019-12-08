import React from 'react';
import prototypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Card from 'components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { prototype } from 'events';
import Title from '../components/Title/Title';

export const queryImage = graphql `
				query {
					post1: file(relativePath: { eq: "niver.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
					post2: file(relativePath: { eq: "dnl.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
				}
			`;

const Blog = ({data}) => (
	<Layout>
    	<SEO 
            pageTitle="Projects"
            description="Front-end developer, developing web pages"
            keywords="React, Gatsby, Front-end, developer, API"
        ></SEO>

		<section className="section is-size-5-desktop is-size-6-touch">
			<Title>Blog</Title>
			
			<p className="has-text-centered">
				Veja alguns de meus projetos no meu <a href="https://github.com/pedrohenrickcs" target="_blank" aria-label="Github">
				<span className="icon">
					<FontAwesomeIcon icon={faGithub}/>
				</span>
				GitHub</a>
			</p>

			<div className="columns is-centered">
				<div className="column is-half">

					<Card
						title="Aniversário Brastemp"
						subtitle="Criação Landing Page para aniversário da loja"
						link="https://loja.brastemp.com.br/cadastro"
						tags={["HTML", "SCSS", "Javascript", "Vtex"]}
						image={<Img fixed={data.post1.childImageSharp.fixed} alt={"Brastemp"} />}
					/>

					<Card
						title="Landing Page"
						subtitle="Criação Landing Page para aniversário da loja"
						link="https://www.diretonaloja.com.br/landing"
						tags={["HTML", "SCSS", "Javascript", "Vtex"]}
						image={<Img fixed={data.post2.childImageSharp.fixed} alt={"Direto na Loja"} />}
					/>
				</div>
			</div>
			<p className="has-text-centered">
			Check out my
			{' '}
			<Link to="/stack">stack</Link>
			.
			</p>
		</section>
	</Layout>
);

Blog.protoType = {
	data: prototypes.object.isRequired,
}

export default Blog;