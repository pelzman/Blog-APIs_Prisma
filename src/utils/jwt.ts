import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./secrete";

const secret = JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}

export const generateAccessToken = (user: User): string => {
  try {
    return jwt.sign({ id: user.id }, secret, {
      expiresIn: "15m",
    });
  } catch (error:any) {
    throw new Error(`Failed to generate access token: ${error.message}`);
  }
};

export const generateRefreshToken = (user:User ): string => {
  try {
    return jwt.sign({ id: user.id }, secret, {
      expiresIn: "7d",
    });
  } catch (error:any) {
    throw new Error(`Failed to generate refresh token: ${error.message}`);
  }
};

export const verifyRefreshToken = (token: string): User => {
  try {
    return jwt.verify(token, secret) as User;
  } catch (error:any) {
    throw new Error(`Failed to verify refresh token: ${error.message}`);
  }
};