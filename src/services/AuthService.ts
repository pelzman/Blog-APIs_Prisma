import { User } from "@prisma/client";
import { hash, compare } from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import UserRepository from "../repositories/UserRepository";


class AuthService {
  private userRepository: UserRepository;
  
  constructor() {
    this.userRepository = new UserRepository();
   
  }
  async HandleregisterUser(credential: User) {
    try {
      const userExist = await this.userRepository.getUserByEmail(
        credential.email
      );
      if (userExist) throw new Error("User already exist");
      credential.password = await hash(credential.password, 10);
      const user = await this.userRepository.create(credential);

      return user;
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message || "Internal Server Error");
    }
  }
  async HandleLogin(credential: User) {
    try {
      const user = await this.userRepository.getUserByEmail(credential.email);
      if (!user) throw new Error("Invalid email");
      const isPasswordValid = await compare(credential.password, user.password);
      if (!isPasswordValid) throw new Error("Incorrect Password");
      const accessToken = await generateAccessToken(user);
      const refreshToken = await generateRefreshToken(user);
  
      return { user, accessToken, refreshToken };
    } catch (error: any) {
      throw new Error(error.message || "Internal Server Error");
    }
  }
  async HandleChangePassword(
    email: string,
    oldPassword: string,
    newPassword: string
  ) {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      if (!user) throw new Error("User not Found");
      const isPasswordValid = await compare(oldPassword, user.password);
      if (!isPasswordValid) throw new Error("Wrong old password");
      const hashedPassword = await hash(newPassword, 10);
      return this.userRepository.updatePassword(email, hashedPassword);
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message || "Internal Server Error");
    }
  }
  async HandleRefreshToken(refreshToken: string) {
    try {
      const userData = await verifyRefreshToken(refreshToken);
      const user = await this.userRepository.getUserById(userData.id);
      if (!user) throw new Error("Invalid refresh token");
      const accessToken = await generateAccessToken(user);
      return { accessToken };
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message || "Internal Server Error");
    }
  }
}
export default AuthService;
