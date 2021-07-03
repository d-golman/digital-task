
export const changePlatform = (platform) => {
  return async (dispatch) => {
    dispatch({
      type: 'CHANGE_PLATFORM',
      payload: platform
    });
  };
};
export const changeSearchField = (search) => {
  return async (dispatch) => {
    dispatch({
      type: 'CHANGE_SEARCH',
      payload: search
    });
  };
};
export const changeSortField = (sort) => {
  return async (dispatch) => {
    dispatch({
      type: 'CHANGE_SORT',
      payload: sort
    });
  };
};
export const changeSortDirection = (direction) => {
  return async (dispatch) => {
    dispatch({
      type: 'CHANGE_DIRECTION',
      payload: direction
    });
  };
};