import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Projects = () => (
	<Layout>
    	<SEO 
            pageTitle="Projects"
            description="Front-end developer, developing web pages"
            keywords="React, Gatsby, Front-end, developer, API"
        ></SEO>

		<section className="section is-size-5-desktop is-size-6-touch">
			<h1 className="title has-text-centered">Projects</h1>
			<hr />
			<p className="has-text-centered">
				Veja alguns de meus projetos no meu <a href="https://github.com/pedrohenrickcs" target="_blank">GitHub</a>
			</p>
		</section>
	</Layout>
);

export default Projects;