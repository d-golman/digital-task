const initialState = {
  games: {},
  loading: false,
  error: null,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        loading: true
      };
    case "FETCH_GAMES_SUCCESS":
      return {
        ...state,
        games: action.payload,
        loading: false
      };
    case "FETCH_GAMES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return { ...state };
  }
};