import axios from "axios";

export const httpclient = axios.create({
  baseURL: "https://gorest.co.in/public",
  timeout: 20000,
  headers: {
    Authorization:
      "Bearer 58a27d7a7ae908d344c8a76553007f4e83ec70bf06bca0e3aaacc55222577fde	",
  },
});
