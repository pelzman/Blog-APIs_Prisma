import { Router } from "express";
import { AuthRoute } from "./AuthRoute";
import { emailRoute } from "./emailJobRoute";
import { auditTrailRoute } from "./AuditTrailRoute";
const router:Router = Router()

router.use('/',  AuthRoute)
router.use('/', emailRoute)
router.use('/', auditTrailRoute)

export const MainRoutes:Router = router