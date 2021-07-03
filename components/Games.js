import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchMoreGames } from '../store/actions/gamesActions';

const GamesBlock = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
color: #EEEEEE;
&>.game-block{
  background-color: #222831;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  width: 400px;
  min-width: 250px;  
  a{
    text-decoration: none;
    p{
      display: block;
      font-size: 1.4rem;
      color: #EEEEEE;
    }
    &>.image{
      margin: 15px 0;
      width: 100%;
      max-height: 300px;
      overflow: hidden;
      img{
        width: 100%
      }
  }
  }
}
`;


const Games = () => {

  const dispatch = useDispatch();
  const { games, error } = useSelector(state => state.games);
  const { platform, sortField, sortDirection, searchField } = useSelector(state => state.gameList);
  const ref = useRef(null);
  const [page, setPage] = useState(2);

  const loadMore = () => {
    if (!!ref.current && ref.current.clientHeight - (window.scrollY + window.innerHeight - ref.current.offsetTop) < 800) {
      setPage(prev => ++prev);
      dispatch(fetchMoreGames(page, platform, sortDirection + sortField, searchField));
      document.removeEventListener('scroll', loadMore);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', loadMore);
    return () => {
      document.removeEventListener('scroll', loadMore);
    };
  }, [games]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <GamesBlock ref={ref}>
      {games.map(game => (
        <div className='game-block' key={game.id}>
          <Link href={`/games/${game.slug}`}>
            <a><p>{game.name}</p>
              <div className="image"><img src={game.background_image} alt={game.name} /></div>
            </a>
          </Link>
          {<p>Rating: {game.rating}</p>}
          <p>Release date: {game.released}</p>
        </div>
      ))}
    </GamesBlock>
  );
};



export default Games;
