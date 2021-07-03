import React from 'react';
import Game from '../../components/Game';
import Layout from '../../components/Layout';
import { initializeStore } from '../../store';
import { fetchGame } from '../../store/actions/gameActions';

const GamePage = ({ initialReduxState }) => {
  const { game, error } = initialReduxState.game;
  return (
    <Layout>
      <Game game={game} error={error} />
    </Layout>
  );
};

export default GamePage;


export const getServerSideProps = async ({ query }) => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(fetchGame(query.slug));

  return { props: { initialReduxState: reduxStore.getState() } };
};