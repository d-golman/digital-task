import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';

const GamePage = styled.div`
.image{
  width: 100%;
  background-color: #222831;
  img{
    display: block;
    margin: auto;
    width: 100%;
    max-width: 1200px;
  }
}

.info{
  color: #eee;
  background-color: #222831;
  padding: 20px;
  &>*:not(h1){
    font-size: 1.3rem;
  }
  a{
    color: #FFD369;
    text-decoration: none;
  }
}
.description{
  h2{
    margin-bottom: 15px;
    font-size: 1.8rem; 
  }
  padding: 20px;
  color: white;
}
`;

const Game = ({ game, error }) => {
  if (error) {
    return <h1>{error}</h1>;
  }
  if (game.detail) {
    return <h1>{game.detail}</h1>;
  }
  return (
    <GamePage key={game.id}>
      <div className="image"><img src={game.background_image} alt={game.name} /></div>
      <div className="info">
        <div className="container">
          <h1>{game.name}</h1>
          <p>Rating: {game.rating}</p>
          <p>Release date: {game.released}</p>
          <a target='_blank' href={game.website || `https://rawg.io/games/${game.slug}`}>Website</a>
        </div>
      </div>
      <div className="description">
        <div className="container">
          <h2>About</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{game.description_raw}</p>
        </div>
      </div>
      <Slider images={game.screenshots} />
    </GamePage>
  );
};

export default Game;
