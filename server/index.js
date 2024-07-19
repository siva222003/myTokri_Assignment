const express = require("express");
const axios = require("axios");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const encryptionKey = "FtmJ7frzTyWOzintybbqIWzwwclcPtaI";

function encryptData(data, secretKey) {
  const algorithm = "aes-256-cbc";
  const secretIv = secretKey.substring(0, 16);

  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(secretKey, "utf-8"),
    Buffer.from(secretIv, "utf-8")
  );
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

function decryptData(encryptedData, secretKey) {
  const algorithm = "aes-256-cbc";
  const secretIv = secretKey.substring(0, 16);

  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey, "utf-8"),
    Buffer.from(secretIv, "utf-8")
  );
  let decrypted = decipher.update(encryptedData, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

app.post("/proxy", async (req, res) => {
  const data = req.body;
  const encryptedData = encryptData(JSON.stringify(data), encryptionKey);

  try {
    const response = await axios.post(
      "https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/",
      encryptedData,
      {
        headers: {
          AccessToken: "0e186445-0647-417c-ae27-8098533f1914",
          "Content-Type": "text/plain",
        },
      }
    );

    console.log("Raw Response Data:", response.data);

    try {
      const decryptedResponse = decryptData(response.data, encryptionKey);
      console.log("Decrypted Response Data:", decryptedResponse);
      res.json(JSON.parse(decryptedResponse));
    } catch (decryptionError) {
      console.error("Error during decryption", decryptionError);
      res.status(500).send("Decryption error");
    }
  } catch (error) {
    console.error("Error during API call", error);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
