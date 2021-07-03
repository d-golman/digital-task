import { getGames } from "../../service/api";

export const fetchGames = (page, platforms, ordering, search) => {
  return async (dispath) => {
    await getGames(page, platforms, ordering, search)
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

export const fetchMoreGames = (page, platforms, ordering, search) => {
  return async (dispath) => {
    await getGames(page, platforms, ordering, search)
      .then(res => {
        if (res) {
          dispath({
            type: 'FETCH_MORE_GAMES_SUCCESS',
            payload: res
          });
        }
      });
  };
};