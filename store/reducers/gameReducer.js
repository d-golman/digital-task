const initialState = {
  game: {},
  error: null,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME_SUCCESS":
      return {
        ...state,
        game: action.payload,
      };
    case "FETCH_GAME_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return { ...state };
  }
};