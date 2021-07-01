const initialState = {
  platforms: []
};

export const platformReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLATFORMS':
      return {
        platforms: action.payload
      };

    default:
      return { ...state };
  }
};