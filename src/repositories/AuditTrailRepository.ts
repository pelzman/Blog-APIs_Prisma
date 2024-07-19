import { Prisma, PrismaClient, AuditTrail } from "@prisma/client";
import BaseReponsitory from "./BaseRepository";
import { IAuditTrailAttribute } from "../types/AuditTrailType";
class AuditTrailRepository extends BaseReponsitory<
AuditTrail,
  Prisma.AuditTrailCreateInput,
  Prisma.AuditTrailWhereInput,
  Prisma.AuditTrailUpdateInput,
  Prisma.AuditTrailWhereUniqueInput
> {
  constructor() {
    const prisma = new PrismaClient();
    super(prisma.auditTrail);
  }
    async createAuditTrail (data: Prisma.AuditTrailCreateInput):Promise<IAuditTrailAttribute>{
      return await this.create(data)
    }
    async getAllAudit ():Promise<IAuditTrailAttribute[] | null>{
        return await this.getAll({})
    }
}
export default AuditTrailRepository;
