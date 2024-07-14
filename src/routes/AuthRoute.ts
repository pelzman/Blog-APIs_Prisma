import { Router, Request, Response, NextFunction } from "express";
import AuthController from "../controllers/AuthController";
import { authentication } from "../middlewares/authMiddleware";

const authController = new AuthController();
const router: Router = Router();

router.post("/register", (req: Request, res: Response, next: NextFunction) =>
  authController.registerUser(req, res, next)
);
router.post("/login", (req: Request, res: Response, next: NextFunction) =>
  authController.loginUser(req, res, next)
);
router.post(
  "/changePassword",
  authentication.required,
  (req: Request, res: Response, next: NextFunction) =>
    authController.changePassword(req, res, next)
);
router.post(
  "/refreshToken",
  authentication.required,
  (req: Request, res: Response, next: NextFunction) =>
    authController.refreshToken(req, res, next)
);

export const AuthRoute: Router = router;
