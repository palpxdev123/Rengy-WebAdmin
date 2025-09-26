import CryptoJS from "crypto-js";

import dayjs from "dayjs";
const SECRET_KEY = "my-secret-key";

// Generate random 16-character salt
export const generateSalt = (): string => {
  return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex).slice(0, 16);
};

// Encrypt data with custom salt
export const encryptData = (data: string) => {
  const salt = generateSalt(); // YOUR random salt
  const key = SECRET_KEY + salt; // combine secret key + salt
  const encrypted = CryptoJS.AES.encrypt(data, key).toString();

  // Store salt along with ciphertext
  return `${salt}:${encrypted}`;
};

// Decrypt data
export const decryptData = (cipherText: string) => {
    if(cipherText){

        const [salt, encrypted] = cipherText.split(":"); // extract salt
        const key = SECRET_KEY + salt;
        const bytes = CryptoJS.AES.decrypt(encrypted, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }else{
        return null
    }
};

export const formatDate = (dateString: string) => {
  return dayjs(dateString).format("DD MMM YYYY");
};
