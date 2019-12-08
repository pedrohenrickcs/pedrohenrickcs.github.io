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

import Title from 'components/Title';

export const queryImage = graphql `
				query {
					project1: file(relativePath: { eq: "niver.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
					project2: file(relativePath: { eq: "dnl.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
					project3: file(relativePath: { eq: "cupom.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
					project4: file(relativePath: { eq: "cc.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
					project5: file(relativePath: { eq: "github.png" }) {
						childImageSharp {
							fixed(width: 96, height: 96) {
							...GatsbyImageSharpFixed
							}
						}
					}
				}
			`;

const Projects = ({data}) => (
	<Layout>
    	<SEO 
            pageTitle="Projects"
            description="Front-end developer, developing web pages"
            keywords="React, Gatsby, Front-end, developer, API"
        ></SEO>

		<section className="section is-size-5-desktop is-size-6-touch">
			<Title>Projects</Title>
			
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
						image={<Img fixed={data.project1.childImageSharp.fixed} alt={"Brastemp"} />}
					/>

					<Card
						title="Landing Page"
						subtitle="Criação Landing Page para aniversário da loja"
						link="https://www.diretonaloja.com.br/landing"
						tags={["HTML", "SCSS", "Javascript", "Vtex"]}
						image={<Img fixed={data.project2.childImageSharp.fixed} alt={"Direto na Loja"} />}
					/>

					<Card
						title="Diretonaloja"
						subtitle="Página de cupom customizada feita em Vtex"
						link="https://www.diretonaloja.com.br/cupom"
						tags={["HTML", "SCSS", "Javascript", "Vtex"]}
						image={<Img fixed={data.project3.childImageSharp.fixed} alt={"Direto na Loja"} />}
					/>

					<Card
						title="Compra Certa"
						subtitle="Criação Landing Page para aniversário da loja"
						link="https://www.compracerta.com.br/landing/aniversario"
						tags={["HTML", "SCSS", "Javascript", "Vtex"]}
						image={<Img fixed={data.project4.childImageSharp.fixed} alt={"Direto na Loja"} />}
					/>

					<Card
						title="Api GitHub"
						subtitle="Consulta repositórios GitHub"
						link="https://pedrohenrick-api-github.netlify.com"
						tags={["HTML", "SCSS", "React", "Rest API"]}
						image={<Img fixed={data.project5.childImageSharp.fixed} alt={"Api Guthub"} />}
					/>
				</div>
			</div>
			<p className="has-text-centered">
			Check out my
			{' '}
			<Link to="/blog">blog</Link>
			.
			</p>
		</section>
	</Layout>
);

Projects.protoType = {
	data: prototypes.object.isRequired,
}

export default Projects;