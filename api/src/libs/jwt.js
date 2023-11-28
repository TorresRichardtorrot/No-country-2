import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const { SECRET_PRIVATE_TOKEN } = process.env;

const createAccessToken = async(payload) => {
  return await new Promise((resolve, reject) => {
   jwt.sign(
      payload,
      SECRET_PRIVATE_TOKEN,
      {
        expiresIn: "24h"//60 * 60 * 24,//24 horas
      },
      (error, token) => {
        if (error) reject(error);
          resolve(token)
      }
    );
  });
};
export default createAccessToken;