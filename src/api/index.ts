import axios from "axios";
import { ExampleRequestData } from "../constants";
import { encryptData } from "../helpers";

export const makeApiRequest = async (data: ExampleRequestData) => {
  const url = import.meta.env.VITE_ENDPOINT as string;
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN as string;
  const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY as string;

  const iv = encryptionKey.substring(0, 16);

  const encryptedData = encryptData(data, encryptionKey, iv);

  console.log("Encrypt", encryptedData);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.post(url, { encryptedData }, config);
    console.log(response.data);
  } catch (error) {
    console.error("Error making API request:", error);
  }
};
