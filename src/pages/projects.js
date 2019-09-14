import React from 'react';
import prototypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { prototype } from 'events';

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
			<h1 className="title has-text-centered">
				Projects</h1>
			<hr />
			
			<p className="has-text-centered">
				Veja alguns de meus projetos no meu <a href="https://github.com/pedrohenrickcs" target="_blank" aria-label="Github">
				<span className="icon">
					<FontAwesomeIcon icon={faGithub}/>
				</span>
				GitHub</a>
			</p>

			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<a href="https://loja.brastemp.com.br/cadastro" target="_blank">
						<div className="card">
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<Img fixed={data.project1.childImageSharp.fixed} alt={"Brastemp"} />
									</div>
									<div className="media-content">
										<h4 className="title is-size-5-desktop is-size-5-touch">Aniversário Brastemp</h4>
										<p className="subtitle is-size-5-desktop is-size-6-touch">Criação Landing Page para aniversário da loja</p>
										<div className="tags">
											<span className="tag">HTML</span>
											<span className="tag">CSS</span>
											<span className="tag">Javascript</span>
											<span className="tag">Vtex</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
					<a href="https://www.diretonaloja.com.br/landing" target="_blank">
						<div className="card">
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<Img fixed={data.project2.childImageSharp.fixed} alt={"Direto na Loja"} />
									</div>
									<div className="media-content">
										<h4 className="title is-size-5-desktop is-size-5-touch">Aniversário Brastemp</h4>
										<p className="subtitle is-size-5-desktop is-size-6-touch">Criação Landing Page para aniversário da loja</p>
										<div className="tags">
											<span className="tag">HTML</span>
											<span className="tag">CSS</span>
											<span className="tag">Javascript</span>
											<span className="tag">Vtex</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
					<a href="https://www.diretonaloja.com.br/cupom" target="_blank">
						<div className="card">
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<Img fixed={data.project3.childImageSharp.fixed} alt={"Direto na Loja"} />
									</div>
									<div className="media-content">
										<h4 className="title is-size-5-desktop is-size-5-touch">Diretonaloja</h4>
										<p className="subtitle is-size-5-desktop is-size-6-touch">Página de cupom customizada feita em Vtex</p>
										<div className="tags">
											<span className="tag">HTML</span>
											<span className="tag">CSS</span>
											<span className="tag">Javascript</span>
											<span className="tag">Vtex</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
					<a href="https://www.compracerta.com.br/landing/aniversario" target="_blank">
						<div className="card">
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<Img fixed={data.project4.childImageSharp.fixed} alt={"Direto na Loja"} />
									</div>
									<div className="media-content">
										<h4 className="title is-size-5-desktop is-size-5-touch">Compra Certa</h4>
										<p className="subtitle is-size-5-desktop is-size-6-touch">Criação Landing Page para aniversário da loja</p>
										<div className="tags">
											<span className="tag">HTML</span>
											<span className="tag">CSS</span>
											<span className="tag">Javascript</span>
											<span className="tag">Vtex</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	</Layout>
);

Projects.protoType = {
	data: prototypes.object.isRequired,
}

export default Projects;