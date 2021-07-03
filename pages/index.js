import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Games from '../components/Games';
import Layout from '../components/Layout';
import SortFields from '../components/SortFields';
import { initializeStore } from '../store';
import { fetchGames } from '../store/actions/gamesActions';
import { fetchPlatforms } from '../store/actions/platformsActions';

const Index = () => {

  return (
    <Layout>
      <SortFields />
      <Games />
    </Layout>
  );
};


export async function getStaticProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  await dispatch(fetchPlatforms());
  await dispatch(fetchGames());

  return { props: { initialReduxState: reduxStore.getState() } };
}


export default Index;