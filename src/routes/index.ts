import { Router } from "express";
import { AuthRoute } from "./AuthRoute";

const router:Router = Router()

router.use('/',  AuthRoute)

export const MainRoutes:Router = router