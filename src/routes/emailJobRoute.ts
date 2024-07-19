import { Request, Response, NextFunction, Router } from "express";
import EmailController from "../controllers/EmailController";
const emailController = new EmailController();
const router: Router = Router();

router.post("/send-email", (req: Request, res: Response) =>
  emailController.sendEmail(req, res)
);

export const emailRoute: Router = router;
