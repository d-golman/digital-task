import { getGame } from "../../service/api";

export const fetchGame = (slug) => {
  return async (dispath) => {
    await getGame(slug)
      .then(res => {
        dispath({
          type: 'FETCH_GAME_SUCCESS',
          payload: res
        });
      })
      .catch(() => dispath({
        type: 'FETCH_GAME_ERROR',
        payload: 'Error on game loading'
      }));
  };
};