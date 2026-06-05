import axios from "axios";

const API_URL =
  "http://localhost:8080/api/reservations";

export const createReservation = async (
  reservation
) => {

  const response = await axios.post(
    API_URL,
    reservation
  );

  return response.data;

};