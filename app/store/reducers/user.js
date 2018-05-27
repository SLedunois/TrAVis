import User from "../definitions/user";

export default function reducer(state, action) {
  switch (action.type) {
    case User.GET_USER: {
      return action.user;
    }
    default:
      return null;
  }
}
