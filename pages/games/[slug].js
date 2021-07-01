import React from 'react';
import Layout from '../../components/Layout';

const Game = ({ slug }) => {
  return (
    <Layout title={slug}>
      <h1>Game {slug}</h1>
    </Layout>
  );
};

export default Game;


export const getServerSideProps = async ({ query }) => {
  return { props: { slug: query.slug } };
};