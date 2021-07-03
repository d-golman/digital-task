const API = (request, params = '') => `https://api.rawg.io/api/${request}?key=fac54fbe32f746e0a143315e7578c156&${params}`;

export const getGames = async (page = 1, platforms, ordering = '-rating', search = '') => {
  return await fetch(API('games', `page=${page}${platforms ? `&platforms=${[platforms].join(',')}` : ''}&ordering=${ordering}&search=${search}`))
    .then(res => res.json())
    .then(res => res['results']);
};

export const getGame = async (slug) => {
  const game = await fetch(API(`games/${slug}`))
    .then(res => res.json());
  game.screenshots = await fetch(API(`games/${slug}/screenshots`))
    .then(res => res.json())
    .then(res => res['results']);

  return game;

};

export const getPlatforms = async () => {
  return await fetch(API(`platforms`))
    .then(res => res.json())
    .then(res => res['results']);
};