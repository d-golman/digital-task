const initialState = {
  games: [],
  error: null,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES_SUCCESS":
      return {
        ...state,
        games: action.payload,
      };
    case "FETCH_MORE_GAMES_SUCCESS":
      return {
        ...state,
        games: [...state.games, ...action.payload],
      };
    case "FETCH_GAMES_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return { ...state };
  }
};