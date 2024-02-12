import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-45b3d/us-central1/api", // cloud function
});

export default instance;