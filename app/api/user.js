import axios from "axios";

const user = {
  getUser: async () => {
    const { data } = await axios.get("/user");
    return data;
  }
};

export default user;
