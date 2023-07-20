export const initialValue = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) ||false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};
export const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    }
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        user:action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        user:{}
      };
    default:
      return state;
  }
};