const initialState = {
  platform: '',
  searchField: '',
  sortField: 'rating',
  sortDirection: '-'
};

export const gameListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PLATFORM':
      return {
        ...state,
        platform: action.payload
      };
    case 'CHANGE_SEARCH':
      return {
        ...state,
        searchField: action.payload
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sortField: action.payload
      };
    case 'CHANGE_DIRECTION':
      return {
        ...state,
        sortDirection: action.payload
      };

    default:
      return {
        ...state
      };
  }
};