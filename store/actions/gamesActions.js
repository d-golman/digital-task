import { getGames } from "../../service/api";

export const fetchGames = (page, platforms, ordering) => {
  return async (dispath) => {
    dispath({ type: 'FETCH_GAMES' });
    await getGames(page, platforms, ordering)
      .then(res => res['results'])
      .then(res => {
        dispath({
          type: 'FETCH_GAMES_SUCCESS',
          payload: res
        });
      })
      .catch(() => dispath({
        type: 'FETCH_GAMES_ERROR',
        payload: 'Error on games loading'
      }));
  };
};