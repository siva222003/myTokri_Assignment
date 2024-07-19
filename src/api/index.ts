import axios from "axios";
import { ExampleRequestData } from "../constants";

export const makeApiRequest = async (data: ExampleRequestData) => {
  const url = "https://mytokriassignment-production.up.railway.app/proxy";
  // const url = "http://localhost:3000/proxy";

  try {
    const response = await axios.post(url, data);

    console.log("Response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during API call", error);
  }
};
