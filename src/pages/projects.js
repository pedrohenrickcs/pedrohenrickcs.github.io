import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Helmet from 'react-helmet';

const Projects = () => (
	<Layout>
    	<SEO 
            pageTitle="Projects"
            description="Front-end developer, developing web pages"
            keywords="React, Gatsby, Front-end, developer, API"
        ></SEO>

		<Helmet>
			<script src="https://kit.fontawesome.com/1349f8977b.js"></script>
		</Helmet>

		<section className="section is-size-5-desktop is-size-6-touch">
			<h1 className="title has-text-centered">
				Projects</h1>
			<hr />
			<p className="has-text-centered">
				Veja alguns de meus projetos no meu <a href="https://github.com/pedrohenrickcs" target="_blank" aria-label="Github"><i class="fab fa-github-square"></i>&nbsp;GitHub</a>
			</p>
		</section>
	</Layout>
);

export default Projects;