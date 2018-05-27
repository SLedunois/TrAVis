import UserService from "../../api/user";
import User from "../definitions/user";

export default function fetchUser() {
  return async dispatch => {
    try {
      const user = await UserService.getUser();
      dispatch({
        type: User.GET_USER,
        user
      });
    } catch (err) {
      throw err;
    }
  };
}
