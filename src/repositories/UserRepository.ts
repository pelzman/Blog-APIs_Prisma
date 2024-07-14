import { User } from "@prisma/client";
import { Prisma, PrismaClient } from "@prisma/client";
import BaseReponsitory from "./BaseRepository";

class UserRepository extends BaseReponsitory<
  User,
  Prisma.UserCreateInput,
  Prisma.UserWhereInput,
  Prisma.UserUpdateInput,
  Prisma.UserWhereUniqueInput
> {
  constructor() {
    const prisma = new PrismaClient();
    super(prisma.user);
  }

  async createUser(data: User): Promise<User> {
    return await this.create(data);
  }
  async createManyUser(data: User): Promise<Prisma.BatchPayload> {
    return await this.createMany(data);
  }
  async getUserById(id: number): Promise<User | null> {
    return await this.getOne({ id });
  }
  async getUserByEmail(email: string): Promise<User | null> {
    return await this.getOne({ email });
  }
  async getUsers(): Promise<User[] | null> {
    return await this.getAll({});
  }
  async updateUsers(id: any, data: User): Promise<User | null> {
    return await this.update(id, data);
  }
  async updatePassword(
    email: string,
    newPassword: string
  ): Promise<User | null> {
    return await this.model.update({
      where: { email },
      data: { password: newPassword },
    });
  }
  async deleteUser(id: number): Promise<void> {
    return await this.deleteOne({ id });
  }
  async deleteUsers(): Promise<void> {
    return await this.deleteMany({});
  }
}
export default UserRepository;
