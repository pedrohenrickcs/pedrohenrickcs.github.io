import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Projects = () => (
    <Layout>
        <SEO pageTitle="Projects"></SEO>
        <h1>Projects</h1>
        <hr />
        <p>
            Veja alguns de meus projetos no meu <a href="https://github.com/pedrohenrickcs" target="_blank">GitHub</a>
        </p>
    </Layout>
);

export default Projects;