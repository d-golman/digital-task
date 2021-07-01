import { getPlatforms } from "../../service/api";

export const fetchPlatforms = () => {
  return async (dispatch) => {
    await getPlatforms()
      .then(res => res['results'])
      .then(res => {
        dispatch({
          type: 'FETCH_PLATFORMS',
          payload: res
        });
      });
  };
};