import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = () => (
  <Layout>
    <SEO />
    <h1>Pedro Henrick Cavalcante Souza</h1>
    <h2>Web Developer</h2>

    <section>
      <h4>Oi, eu sou o Pedro</h4>
      <p>
        {`Tenho 6 anos de experiência como front-end, sendo cerca de 3 anos atuando com Vtex. 
          Possuo facilidade em trabalhar em grupo, prezando sempre o melhor para o ambiente de trabalho e também para o cliente final, além da competência de me comprometer com o que é proposto buscando sempre o melhor resultado possível.`}
      </p>
      <p>
        Veja meus projetos <Link to="/projects">projects</Link>
      </p>
    </section>
  </Layout>
);

export default Home;
