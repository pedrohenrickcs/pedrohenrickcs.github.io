import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Title from "components/Title";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Stack = () => (
	<Layout>
    	<SEO 
            pageTitle="Projects"
            description="Front-end developer, developing web pages"
            keywords="React, Gatsby, Front-end, developer, API"
        />

        <Helmet>
            <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
        </Helmet>

		<section className="section is-size-5-desktop is-size-6-touch">
			<Title>Stack</Title>
			<div className="has-text-centered">
                <p className="has-text-centered">
                    I have experience with many modern tools,
                    I select them for my projects depending on the usage.
                </p>
                <p className="content">Here is my stack on StackShare:</p>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <a 
                            frameborder="0"
                            data-theme="dark"
                            data-layers="1,2,3,4"
                            data-stack-embed="true"
                            href="https://embed.stackshare.io/stacks/embed/a8930417f5020646813ca234a5332a"
                        >
                            StackShare
                        </a>
                    </div>
                </div>
            </div>
		</section>
	</Layout>
);

export default Stack;