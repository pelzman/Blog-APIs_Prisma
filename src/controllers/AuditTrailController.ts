import {Request, Response, NextFunction} from 'express'
import AuditTrailService from "../services/AuditTrailService";
import config from '../utils/config';

class AuditTrailController {
    private auditTrailService: AuditTrailService;
  
    constructor() {
      this.auditTrailService = new AuditTrailService();
    }
  
    // Method to get all audit trails
    async getAllAuditTrails(req: Request, res: Response, next: NextFunction) {
      try {
        const auditTrails = await this.auditTrailService.HandleGetAllAuditTrail();
        return res.status(config.HTTP_CODES.SUCCESS).json({
          status: config.HTTP_CODES.SUCCESS,
          data: auditTrails,
        });
      } catch (error: any) {
        next(error);
        return res
          .status(config.HTTP_CODES.INTERNAL_SERVER_ERROR)
          .json({ message: error.message });
      }
    }
  }
  
  export default AuditTrailController;

