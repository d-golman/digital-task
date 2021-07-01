import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { initializeStore } from '../store';
import { fetchGames } from '../store/actions/gamesActions';
import { fetchPlatforms } from '../store/actions/platformsActions';

const Index = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchGames());
  // }, [dispatch]);
  const { games } = useSelector(state => state.games);
  const { platforms } = useSelector(state => state.platforms);
  return (
    <Layout>
      <select>{platforms.map(platform => (
        <option value={platform.id} key={platform.id}>{platform.name}</option>
      ))}</select>
      <ul>{games.map(game => (
        <li key={game.id}>{game.name}</li>
      ))}</ul>
    </Layout>
  );
};


export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  const platforms = () => reduxStore.getState().platforms.platforms.map(platform => platform.id);

  await dispatch(fetchPlatforms());
  await dispatch(fetchGames('1', platforms(), 'name'));

  return { props: { initialReduxState: reduxStore.getState() } };
}


export default Index;