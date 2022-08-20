const { USER } = require("../actions/userAction");

const init = {
  user: [],
};
export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
