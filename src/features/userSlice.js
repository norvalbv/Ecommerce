const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "loginStart":
      return {
        ...state,
        isFetching: (state.isFetching = true),
      };
    case "loginSuccess":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        currentUser: (state.currentUser = action.payload),
      };
    case "loginFailure":
      return {
        ...state,
        isFetching: (state.isFetching = false),
        error: (state.error = true),
      };
    default:
      return state;
  }
};

export default user;
