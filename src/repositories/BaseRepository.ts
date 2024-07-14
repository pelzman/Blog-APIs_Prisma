import { PrismaClient, Prisma } from "@prisma/client";

class BaseReponsitory<
  T,
  CreateInput,
  WhereInput,
  UpdateInpute,
  WhereUniqueInput
> {
  protected model: any;
  constructor(model: any) {
    this.model = model;
  }
  async create(data: CreateInput): Promise<T> {
    return (await this.model.create({ data })) as unknown as T;
  }
  async createMany(data: CreateInput): Promise<Prisma.BatchPayload> {
    return await this.model.createMany({ data });
  }
  async getOne(where: WhereUniqueInput): Promise<T | null> {
    return await this.model.findUnique({ where });
  }
  async getAll(where: WhereInput): Promise<T[] | null> {
    return await this.model.findMany({ where });
  }
  async update(where: WhereInput, data: UpdateInpute): Promise<T | null> {
    return (await this.model.update({ where, data })) as unknown as T;
  }

  async deleteOne(where: WhereUniqueInput): Promise<void> {
    return await this.model.delete({ where });
  }

  async deleteMany(where: WhereInput): Promise<void> {
    return await this.model.deleteMany({ where });
  }
}

export default BaseReponsitory;
