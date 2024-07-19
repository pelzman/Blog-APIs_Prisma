import { Prisma } from "@prisma/client";

export const auditTrailSelect = Prisma.validator<Prisma.AuditTrailSelect>()({
 id:true,
 action:true,
 entity:true,
 entityId:true,
 details: true,
 userId: true,
 timeStamp:true,

})
export type IAuditTrailAttribute = Prisma.AuditTrailGetPayload<{
 select : typeof auditTrailSelect
}>

