import axios from "axios";
// We created Global Header for token
// You can specify config defaults that will be applied to every request.

// Global axios defaults
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
