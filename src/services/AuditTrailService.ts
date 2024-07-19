import AuditTrailRepository from "../repositories/AuditTrailRepository";



class AuditTrailService{
    protected auditTrailRepository : AuditTrailRepository
    constructor(){
        this.auditTrailRepository = new AuditTrailRepository()
    }

    async HandleCreateAuditTrail (data:{action:string, entity:string, entityId:number, details:object, userId:number}){
    return await  this.auditTrailRepository.createAuditTrail(data)
    }
    async HandleGetAllAuditTrail (){
        return await  this.auditTrailRepository.getAllAudit()
        }
}

export default AuditTrailService