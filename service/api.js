const API = (request, params = '') => `https://api.rawg.io/api/${request}?key=fac54fbe32f746e0a143315e7578c156&${params}`;

export const getGames = async (page, platforms, ordering) => {
  return await fetch(API('games', `page=${page}&platforms=${[platforms].join(',')}&ordering=${ordering}`))
    .then(res => res.json());
};

export const getGame = async (slug) => {
  return await fetch(API(`games/${slug}`))
    .then(res => res.json())
    ;
};

export const getPlatforms = async () => {
  return await fetch(API(`platforms`))
    .then(res => res.json());
};