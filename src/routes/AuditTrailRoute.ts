import { Request, Response, NextFunction, Router } from "express";
import AuditTrailController from "../controllers/AuditTrailController";

const auditTrail = new AuditTrailController();
const router: Router = Router();

router.get("/auditTrail", (req: Request, res: Response, next: NextFunction) =>
  auditTrail.getAllAuditTrails(req, res, next)
);
export const auditTrailRoute: Router = router;
