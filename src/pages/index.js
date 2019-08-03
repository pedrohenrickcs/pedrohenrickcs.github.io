import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = () => (
	<Layout>
		<SEO 
		description="Front-end developer, developing web pages" 
		keywords="React, Gatsby, Front-end, developer, API"
		/>
		<Helmet>
			<script src="https://kit.fontawesome.com/1349f8977b.js"></script>
		</Helmet>
		<h1 className="title has-text-centered">Pedro Henrick Cavalcante Souza</h1>
		<h2 className="subtitle has-text-centered">Web Developer</h2>
		<div className="has-text-centered">
			<a href="https://github.com/pedrohenrickcs" target="_blank" aria-label="Github">
				<span className="icon is-large">
					<i class="fab fa-2x fa-github-square">
					</i>
				</span>
			</a>
			<a href="https://www.linkedin.com/in/pedro-henrickcs/" target="_blank" aria-label="Linkedin">
				<span className="icon is-large">
					<i class="fab fa-2x fa-linkedin"></i>
				</span>
			</a>
			<a href="https://codepen.io/pedrohenrickcs/" target="_blank" aria-label="Codepen">
				<span className="icon is-large">
					<i class="fab fa-2x fa-codepen"></i>
				</span>
			</a>
		</div>

		<section className="section content is-size-5-desktop is-size-6-touch">
			<h4>Oi, eu sou o Pedro</h4>
			<p>
			{`Tenho 6 anos de experiência como front-end, sendo cerca de 3 anos atuando com Vtex. 
				Possuo facilidade em trabalhar em grupo, prezando sempre o melhor para o ambiente de trabalho e também para o cliente final, além da competência de me comprometer com o que é proposto buscando sempre o melhor resultado possível.`}
			</p>
			<p>
			Veja meus projetos
			<Link to="/projects">projects</Link>
			</p>
		</section>
	</Layout>
);

export default Home;
