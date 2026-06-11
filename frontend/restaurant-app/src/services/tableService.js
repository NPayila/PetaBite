import axios from "axios";

const API_URL =
  "http://localhost:8080/api/tables";

export const getTables =
  async () => {

    const response =
      await axios.get(
        API_URL
      );

    return response.data;

};