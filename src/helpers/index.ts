import { ExampleRequestData } from "../constants";
import CryptoJS from "crypto-js";


export const encryptData = (data: ExampleRequestData, key: any, iv: any) => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};
